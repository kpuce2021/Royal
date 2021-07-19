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
//             Login
//=================================

// router.get("/auth", auth, (req, res) => {
//     res.status(200).json({
//         _id: req.user._id,
//         isAdmin: req.user.role === 0 ? false : true,
//         isAuth: true,
//         email: req.user.email,
//         name: req.user.name,
//         lastname: req.user.lastname,
//         role: req.user.role,
//         image: req.user.image,
//     });
// });

// 회원가입
router.post("/signup", (req, res) => {
    // [null, user_id, user_password, user_name, user_joindate, user_joindate, 1, pro_url]
    var userObj = {
      user_id : req.body.user_id,
      user_password : req.body.user_password,
      user_name : req.body.user_name,
      user_joindate : req.body.user_joindate,
      user_update : req.body.user_joindate,
      user_type : req.body.user_type,
      pro_url : ""
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
      res.send(result);
    });
});

// 로그인
router.post("/login", (req, res) => {
    var user_id = req.body.user_id;
    var user_password = req.body.user_password;
    var sql = 'SELECT * FROM users WHERE user_id=? AND user_password=?';
    console.log(user_id + " : " + user_password);
    conn.query(sql, [user_id, user_password], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        console.log(result[0].user_id + " : " + result[0].user_password);
        res.send(result);
      });
});

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

module.exports = router;