const express = require('express');
const router = express.Router();
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')

const db_config = require('../config/database.js');
const conn = db_config.init();
db_config.connect(conn);

const crypto = require('crypto');
const jwt = require('../modules/jwt');
const verifyToken = require('../modules/jwt').verify
//let jwt = require("jsonwebtoken");
//let secretObj = require("../config/jwt");


app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

//=================================
//             Login
//=================================

//      앱 완성시 지워야됨
// user_id : 회원 아이디
// user_password : 회원 비밀번호
// user_name : 회원 닉네임
// user_joindate : 가입 날짜
// user_update : 업데이트 날짜
// user_type : 유저 타입(관리자, 일반 이용자)
// pro_url : 프로필 url
// pw_salt : 비밀번호 해쉬 솔트

// 회원가입
router.post("/signup", (req, res) => {
    // [null, user_id, user_password, user_name, user_joindate, user_joindate, 1, pro_url]
    const salt = crypto.randomBytes(32).toString()
    const hashedPw = crypto.pbkdf2Sync(req.body.user_password, salt, 1, 32, 'sha512').toString('hex')
    var userObj = {
      user_id : req.body.user_id,
      user_password : hashedPw,
      user_name : req.body.user_name,
      user_joindate : req.body.user_joindate,
      user_update : req.body.user_joindate,
      user_type : req.body.user_type,
      pro_url : "",
      pw_salt : salt
    };
    var sql = 'INSERT INTO users SET ?'; //VALUES(user_no, user_id, user_password, user_name, user_joindate, user_update, user_type, pro_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    conn.query(sql, userObj, function(err, results, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //res.redirect('/topic/'+ result.insertId);
        res.send(results);
      });
});

// 아이디 중복
router.post("/id_check", (req, res) => {
  var user_id = req.body.user_id;
  var sql = 'SELECT * FROM users WHERE user_id=?';
  conn.query(sql, [user_id], function(err, results, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[i].user_id);
      res.send(results);
    });
});

// 닉네임 중복
router.post("/nickname_check", (req, res) => {
  var user_name = req.body.user_name;
  var sql = 'SELECT * FROM users WHERE user_name=?';
  conn.query(sql, [user_name], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[0].user_name);
      res.send(result); // 닉네임 데이터
    });
});

// 로그인
router.post("/login", (req, res) => {
    var userObj = {
      user_id : req.body.user_id,
    };
    var user_password = req.body.user_password;

    var sql = 'SELECT * FROM users WHERE user_id=?';
    //console.log(user_id + " : " + user_password);
    conn.query(sql, [userObj.user_id], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        const hashedPw = crypto.pbkdf2Sync(user_password, result[0].pw_salt, 1, 32, 'sha512').toString('hex')

        // token 저장
        const jwtToken = jwt.sign(userObj);
        //console.log(jwtToken.token);
        if(hashedPw === result[0].user_password){
          res.cookie("user", jwtToken.token);
          res.json({
            result: "ok", // 로그인 성공
            accessToken: jwtToken.token,
            refreshToken : jwtToken.refreshToken
          })
        }
        else if(!result){
          res.error({  // 로그인 실패(아이디 없음)
            result: "id missed"
          })
        }
        else if(hashedPw != result[0].user_password){
          res.error({  // 로그인 실패(비밀번호 틀림)
            result: "pw missed"
          })
        }
        else{
          res.error({  // 나머지 오류일시 db데이터 전부 send
            result: result
          })
        }
        
        console.log(result[0].user_id + " : " + result[0].user_password);
      });
});

router.get("/someAPI", function(req, res, next){
  var token = req.headers.accesstoken;
  console.log(token)
  //res.json(req.decoded);

  let decoded = verifyToken(token);
  if(decoded){
    res.send("권한이 있어서 API 수행 가능")
  }
  else{
    res.send("권한이 없습니다.")
  }
  next()
})

// 로그아웃
// router.get("/logout", auth, (req, res) => {
    
// });


/*
app.get('/users', (req, res) => {
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
  });
*/

// 나의 정보

// 토큰 검사 후 계정 정보 반환

// // 토큰 추출하기 위해 ensureAuthorized 먼저 실행
// app.get('/me', ensureAuthorized, function(req, res) {
//   User.findOne({token: req.token}, function(err, user) {
//       if (err) {
//           res.json({
//               type: false,
//               data: "Error occured: " + err
//           });
//       } else {
//           res.json({
//               type: true,
//               data: user
//           });
//       }
//   });
// });



// // 요청 헤더 내의 authorization 헤더에서 토큰 추출

// // 토큰이 존재하면, 토큰을 req.token에 할당
// function ensureAuthorized(req, res, next) {
//   var bearerToken;
//   var bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== 'undefined') {
//       var bearer = bearerHeader.split(" ");
//       bearerToken = bearer[1];
//       req.token = bearerToken;
//       next(); // 다음 콜백함수 진행
//   } else {
//       res.send(403);
//   }
// }

// process.on('uncaughtException', function(err) {
//   console.log(err);
// });

module.exports = router;