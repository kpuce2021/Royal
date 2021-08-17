const express = require('express');
const router = express.Router();
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')

const db_config = require('../config/database.js');
const conn = db_config.init();
db_config.connect(conn);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

//=================================
//          My_page
//=================================

//      앱 완성시 지워야됨
// users
// user_id : 회원 아이디
// user_password : 회원 비밀번호
// user_name : 회원 닉네임
// user_joindate : 가입 날짜
// user_update : 업데이트 날짜
// user_type : 유저 타입(관리자, 일반 이용자)
// pro_url : 프로필 url
// pw_salt : 비밀번호 해쉬 솔트

// boards
// board_title : 게시글 제목
// board_date : 게시글 작성 날짜
// board_like : 게시글 좋아요

// challenge
// ch_no : 챌린지 번호
// ch_rank : 챌린지 랭킹
// ch_count : 챌린지 횟수

//my page 화면
router.post("/", (req, res) => {
  //var sql = 'SELECT * FROM users LEFT OUTER JOIN challenge on users.user_no = challenge.user_no LEFT OUTER JOIN timeattack on users.user_no = timeattack.user_no LEFT OUTER JOIN exercise_count on users.user_no = exercise_count.user_no WHERE users.user_id=?'
  var sql = 'SELECT * FROM users LEFT OUTER JOIN challenge on users.user_no = challenge.user_no LEFT OUTER JOIN timeattack on users.user_no = timeattack.user_no WHERE users.user_id=? AND ch_rank = (select min(ch_rank) from challenge limit 3) AND ta_count = (select min(ta_count) from timeattack limit 3)'
  var user_id = req.body.user_id;

  conn.query(sql, [user_id], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //res.redirect('/topic/'+ result.insertId);
      res.send(result);
    });
});


//profile 수정 화면
router.post("/profile", (req, res) => {
  var user_id = req.body.user_id;
  var sql = 'SELECT * FROM users WHERE user_id=?';
  conn.query(sql, [user_id], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[i].user_id + " : " + result[i].user_password);
      res.send(result);
    });
});

//profile 수정 요청
router.post("/updateProfile", (req, res) => {
  const userObj = {
    user_name : req.body.user_name,
    pro_url : req.body.pro_url,
  }
  const user_id = req.body.user_id;

  var sql = 'UPDATE users SET ? WHERE user_id = ?';

  conn.query(sql, [userObj, user_id], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //res.redirect('/topic/'+ result.insertId);
      res.send(result);
    });
});

/*
app.get('/users', (req, res) => {
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
  });
*/

module.exports = router;