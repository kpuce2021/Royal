const express = require('express');
const router = express.Router();

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
router.post("/home", (req, res) => {
    var sql = 'SELECT * FROM from users LEFT OUTER JOIN challenge on users.user_no = challenge.user_no WHERE users.user_id=? OR challenge.rank <= 3';
    var user_id = req.body.user_id;

    conn.query(sql, [user_id], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //console.log(result[i].user_id + " : " + result[i].user_password);
        console.log(result[i].user_id);
      res.send(result);
      });
});

// challenge ranking
router.post("/challenge/rank", (req, res) => {
    var user_no = req.body.user_no;
    var ex_no = req.body.ex_no;
    var sql = 'SELECT * FROM challenge WHERE user_no=?, ex_no=?';
    conn.query(sql, [user_no, ex_no], function(err, result, field){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server  Error');
        }
        //console.log(result[i].user_id + " : " + result[i].user_password);
        console.log(result[i].user_no + " : " + result[i].ex_no);
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