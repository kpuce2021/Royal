const express = require('express');
const router = express.Router();

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
router.post("/challenge/save", (req, res) => {

    var user_no = req.body.user_no;
    var ex_no = req.body.ex_no;
    var ch_rank = req.body.ch_rank;
    var ch_count = req.body.ch_count;
    var sql = 'INSERT INTO users VALUES(ch_no,user_no,ex_no,ch_rank,ch_count) VALUES (?, ?, ?, ?, ?)';

    conn.query(sql, [null, user_no, ex_no, ch_rank, ch_count], function(err, result, field){
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