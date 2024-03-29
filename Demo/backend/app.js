const express = require('express')
const axios = require("axios");
const db_config = require(__dirname + '/config/database.js');
const conn = db_config.init();
const app = express()
const port = 8080
const cors = require('cors');
const bodyParser = require('body-parser')
const spawn = require('child_process').spawn; 
//const tf = require("@tensorflow/tfjs-node");
//const tf = require("@tensorflow/tfjs");
//const {loadGraphModel} = require('@tensorflow/tfjs-converter');

const challengeRouter = require('./routes/challenge');
const exerciseRouter = require('./routes/exercise');
const homeRouter = require('./routes/home');
const boardsRouter = require('./routes/boards');
const loginRouter = require('./routes/login');
const mypageRouter = require('./routes/mypage');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
db_config.connect(conn);


app.use('/challenge',challengeRouter);
app.use('/exercise',exerciseRouter);
app.use('/home',homeRouter);
app.use('/boards',boardsRouter);
app.use('/login',loginRouter);
app.use('/mypage',mypageRouter);

app.get('/', (req, res) => {
  console.log('get 요청',req.body);
  res.send('Hello World!')
  var test = req
  //console.log('test', test);
  // console.log('req',req.body['pose'])
})

app.post('/', (req, res) => {
  console.log('post 요청',req.body);
  //res.send('send ok');

  // let test = [[]]
  // for(i=1;i<7;i++){
  //   test[0].push(req.body.pose[i].position.x)
  //   test[0].push(req.body.pose[i].position.y)
  // }
  // for(i=11; i<17; i++){
  //   test[0].push(req.body.pose[i].position.x)
  //   test[0].push(req.body.pose[i].position.y)
  // }
  // const arrString = test.join()
  // console.log('test',test)
  // console.log('array',arrString)

  // const pose = async function loadModel(Temp) {
  //   const model = await loadGraphModel(
  //     "file://./web_model/model.json"
  //   );
    
  //   const Input = tf.tensor(Temp);
  //   const Output = model.predict(Input).dataSync()[0];
  //   //const Output = model.executeAsync(Temp);
  //   console.log('##output : ',Output);
  //   return Output.toFixed(2)*100;
  // }

  // pose(test).then(v => {
  //   console.log('loadModel : ',v); 
  //   res.send(v.toString());
  // });
  //const pose = loadModel(test)
  // console.log('loadModel : ', pose)
  // res.send(pose.toString());
  
})

// app.post('/', (req, res) => {
//   console.log('post 요청',req.body);

//   let test = []
//   for(i=1;i<7;i++){
//     test.push(req.body.pose[i].position.x)
//     test.push(req.body.pose[i].position.y)
//   }
//   for(i=11; i<17; i++){
//     test.push(req.body.pose[i].position.x)
//     test.push(req.body.pose[i].position.y)
//   }
//   const arrString = test.join()
//   console.log('array',arrString)
//   try{
//     axios.post("http://127.0.0.1:8000",{ 'arrString' : arrString })
//            .then(data => {
//             const dedect = data.data;
//             console.log('django detect : ', dedect);
//             //res.status(200).send(dedect)
//             res.send(dedect.toString())
//            }).catch(err => 
//             res.send(err)
//            );
//   }
//   catch(err){
//     console.error("GG", err);
//   }
  
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})