const express = require('express');
const router = express.Router();

//=================================
//             Exercise
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

// exercise 선택 화면
router.post("/exercise", (req, res) => {
  var sql = 'SELECT * FROM Exercise';
  conn.query(sql, function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[i].user_id + " : " + result[i].user_password);
      res.send(result);
    });
});

// exercise 선택
router.post("/exercise/select", (req, res) => {
    var ex_no = req.body.ex_no;
    var sql = 'SELECT * FROM Exercise WHERE ex_no=?';
    conn.query(sql, [ex_no], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //console.log(result[i].user_id + " : " + result[i].user_password);
        res.send(result);
      });
});

// exercise 시작
router.post("/exercise/start", (req, res) => {
  // var ex_no = req.body.ex_no;
  // var sql = 'SELECT * FROM Exercise WHERE ex_no=?';
  // conn.query(sql, [ex_no], function(err, result, field){
  //     if(err){
  //       console.log(err);
  //       res.status(500).send('Internal Server  Error');
  //     }
  //     //console.log(result[i].user_id + " : " + result[i].user_password);
  //   });
});

// 기록 저장
router.post("/exercise/save", (req, res) => {

  var user_no = req.body.user_no;
  var ex_no = req.body.ex_no;
  var ch_rank = req.body.ch_rank;
  var ch_count = req.body.ch_count;
  var ec_count = req.body.ec_count;
  var ec_date = new Date();

  var ch_sql = 'INSERT INTO challenge VALUES(ch_no,user_no,ex_no,ch_rank,ch_count) VALUES (?, ?, ?, ?, ?)'; // challenge 기록 저장
  var ch_sqls = mysql.format(ch_sql, [null, user_no, ex_no, ch_rank, ch_count]); 

  var ec_sql = 'INSERT INTO exercise_count VALUES(ec_no,user_no,ex_no,ec_count,ec_date) VALUES (?, ?, ?, ?, ?)'; // 운동 기록 저장
  var ec_sqls = mysql.format(ec_sql, [null, user_no, ex_no, ec_count, ec_date]);   

  conn.query(ch_sqls+ec_sqls, function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //res.redirect('/topic/'+ result.insertId);
      console.log(result[i].user_no + " : " + result[i].ex_no + " : " + result[i].ec_date);
      res.send(result);
    });
});

// 운동 기록 확인 >>> 나중에 Callendar.js로
router.post("/ex_count", (req, res) => {
  var user_no = req.body.user_no;
  var ex_no = req.body.ex_no;
  var ec_date = req.body.ec_date;
  var sql = 'SELECT * FROM Exercise_count WHERE user_no=? AND ex_no=? AND ec_date=?';
  conn.query(sql, [user_no, ex_no, ec_date], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[i].user_id + " : " + result[i].user_password);
      console.log(result[i].user_id + " : " + result[i].ex_no + " : " + result[i].ec_date);
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