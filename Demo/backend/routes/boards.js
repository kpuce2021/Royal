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
//          Boards
//=================================

//      앱 완성시 지워야됨
// boards
// no : 게시글 번호
// user_no : 유저 번호
// board_title : 게시글 제목
// board_description : 
// board_contents : 게시글 내용
// board_date : 게시글 작성 날짜
// board_update : 게시글 수정 날짜
// board_like : 게시글 좋아요

//boards 화면
router.post("/", (req, res) => {
  var sql = 'SELECT * FROM boards ORDER BY no DESC';

  conn.query(sql, function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      //res.redirect('/topic/'+ result.insertId);
      res.send(result);
    });
});

//boards 읽기
router.post("/read", (req, res) => {
    const board_no = req.body.board_no;
    var sql = 'SELECT * FROM boards WHERE no = ?';
  
    conn.query(sql, [board_no], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //res.redirect('/topic/'+ result.insertId);
        res.send(result);
      });
  });

//board 작성
router.post("/write", (req, res) => {
  const boardObj = {
    board_no : req.body.board_no,
    user_no : req.body.user_no,
    board_title : req.body.board_title,
    board_description : req.body.board_description,
    board_contents : req.body.board_contents,
    board_date : req.body.board_date,
    board_update : req.body.board_update,
    board_like : 0,
  }

  var sql = 'INSERT INTO boards SET ?';
  conn.query(sql, function(err, result, field){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server  Error');
      }
      res.send(result);
    });
});

//board 수정 요청
router.post("/update", (req, res) => {
  const boardObj = {
    board_title : req.body.board_title,
    board_contents : req.body.board_contents,
    board_update : req.body.board_update,
  }
  const board_no = req.body.board_no;
  const user_no = req.body.user_no;

  var sql = 'UPDATE board SET ? WHERE no = ? AND user_no = ?';

  conn.query(sql, [boardObj, board_no, user_no], function(err, result, field){
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