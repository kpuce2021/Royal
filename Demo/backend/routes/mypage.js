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