const express = require('express')
const axios = require("axios");
const app = express()
const port = 8081
const cors = require('cors');
const bodyParser = require('body-parser')
const spawn = require('child_process').spawn; 

app.use(cors());
//app.use(bodyParser().json());
app.use(express.json())


app.get('/', (req, res) => {
  console.log('get 요청',req.body);
  res.send('Hello World!')
  var test = req
  //console.log('test', test);
  // console.log('req',req.body['pose'])
})

app.post('/', (req, res) => {
  console.log('post 요청',req.body);

  let test = []
  for(i=1;i<7;i++){
    test.push(req.body.pose[i].position.x)
    test.push(req.body.pose[i].position.y)
  }
  for(i=11; i<17; i++){
    test.push(req.body.pose[i].position.x)
    test.push(req.body.pose[i].position.y)
  }
  const arrString = test.join()
  console.log('array',arrString)
  try{
    axios.post("http://ec2-13-125-28-252.ap-northeast-2.compute.amazonaws.com:8081",{ 'arrString' : arrString })
           .then(data => {
            const dedect = data.data;
            console.log('django detect : ', dedect);
            //res.status(200).send(dedect)
            res.send(dedect.toString())
           }).catch(err => 
            res.send(err)
           );
  }
  catch(err){
    console.error("GG", err);
  }
  
  /*
  const result = spawn('python', ['load_model.py', arrString]); 
  // stdout의 'data'이벤트리스너로 실행결과를 받는다
  result.stdout.on('data', function(data) { 
    const test = data
    console.log('test',test)
    console.log("pose_estimation ## squart: " + data.toString());
    res.send(data.toString())
  }); 
  // 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다. 
  result.stderr.on('data', function(data) { 
    console.log(data.toString()); 
  });
  */

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})