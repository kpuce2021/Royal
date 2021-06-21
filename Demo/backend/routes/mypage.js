const express = require('express');
const router = express.Router();

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
router.post("/mypage", (req, res) => {
  var sql = 'SELECT * FROM from users LEFT OUTER JOIN challenge on users.user_no = challenge.user_no LEFT OUTER JOIN timeattack on users.user_no = timeattack.user_no LEFT OUTER JOIN exercise_count on users.user_no = exercise_count.user_no WHERE users.user_id=?'

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
router.post("/profile/modifiying_profile", (req, res) => {

    var user_name = req.body.user_name;
    var pro_url = req.body.pro_url;
    var user_id = req.body.user_id;
    var sql = 'UPDATE users SET user_name="?", pro_url="?" WHERE user_id="?"';

    conn.query(sql, [user_name, pro_url, user_id], function(err, result, field){
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