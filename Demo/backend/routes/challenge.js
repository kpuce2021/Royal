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
//             Challenge
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


//challenge 기록 저장
router.post("/save", (req, res) => {
  const challengeObj = {
    ch_no : null,
    user_no : req.body.user_no,
    ex_no : req.body.ex_no,
    ch_rank : req.body.ch_rank,
    ch_count : req.body.ch_count,
  };
    var sql = 'INSERT INTO challenge SET ?';

    conn.query(sql, challengeObj, function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //res.redirect('/topic/'+ result.insertId);
        res.send(result);
      });
});

// challenge ranking
router.post("/rank", (req, res) => {
  var user_no = req.body.user_no;
  var ex_no = req.body.ex_no;
  var sql = 'SELECT * FROM challenge WHERE user_no=?, ex_no=?';
  conn.query(sql, [user_no, ex_no], function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
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