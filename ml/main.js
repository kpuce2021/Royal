var express = require('express');
var app = express();
var logger = require('morgan');
const port = 3300;
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var indexRouter = require('./index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
app.use('/', indexRouter);

module.exports = app;


   /*
var express = require('express');
 var app = express(); 
 var bodyParser = require('body-parser');
  var session = require('express-session');
   var fs = require("fs") 
   // 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
   app.set('views', __dirname + '/views'); 
   // 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정합니다. 
   app.set('view engine', 'ejs'); 
   app.engine('html', require('ejs').renderFile); 
   var server = app.listen(3300, function(){ console.log("Express server has started on port 3300") });
    // 스타일(CSS) 적용하기 
    app.use(express.static('public'));
     // "localhost:3000/dudukri"으로 접속 -> 농부페이지 
     var routes = require('./main.js'); 
     app.use('/dudukri', routes); 
     var users = require('./routes/users'); 
     app.use('/users', users);
*/