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
//             Home
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

// home 화면
router.post("/", (req, res) => {
    var sql = 'SELECT * FROM boards, challenge WHERE challenge.ch_rank = ( SELECT ch_rank FROM challenge ORDER BY challenge.ch_rank LIMIT 3) AND boards.board_like = ( SELECT board_like FROM boards ORDER BY boards.board_like DESC LIMIT 3);';
    //var user_id = req.body.user_id;

    conn.query(sql, function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //console.log(result[i].user_id + " : " + result[i].user_password);
        //console.log(result[i].user_id);
      res.send(result);
      });
});

// challenge ranking
router.post("/challenge_rank/more", (req, res) => {
  var sql = 'SELECT * FROM challenge ORDER BY ch_rank';
  conn.query(sql, function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //console.log(result[i].user_id + " : " + result[i].user_password);
      //console.log(result[i].user_no + " : " + result[i].ex_no);
      res.send(result);
    });
});

// boards ranking
router.post("/boards_rank/more", (req, res) => {
  var sql = 'SELECT * FROM boards ORDER BY board_like';
  conn.query(sql, function(err, result, field){
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