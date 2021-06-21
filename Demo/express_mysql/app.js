var mysql = require('mysql');
var port = 8080
var con = mysql.createConnection({
  host : 'database-1.cu4l9m7ygyls.ap-northeast-2.rds.amazonaws.com',
  user : 'admin',
  password : 'abc123456',
  database : "hello_pt"

});

con.connect();
con.query('select * from users',
  (error, result)=>{
    console.log('error', error);
    console.log('result', result)
 
 });

// con.connect();

 var sql = 'INSERT INTO users(user_id,user_password,user_name) VALUES(?,?,?)';
 var param = ["sett",1234,'doe'];
 con.query(sql,param,function(err, rows, fields){
   if(err){
     console.log(err);
   }else{
     console.log(row.insertId);
   }
 });
 


/*const express = require("express"); 
const app = express();
const port = 3306; 
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");


var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "AWS-royal"
});

connection.connect();

app.use(body-parser)*/