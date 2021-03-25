const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
//app.use(bodyParser().json());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
  //console.log('test', test);
  // console.log('req',req.body['pose'])
})


app.post('/', (req, res) => {
  res.send("post 요청")
  console.log('post 요청',req.body);
  let test = []
  console.log('test',req.body.pose[5])
  // test.push(req.body.pose[0].position.x)
  // test.push(req.body.pose[0].position.y)
  // console.log('array',test)
  test.push(req.body.pose[5].position.x)
  test.push(req.body.pose[5].position.y)
  test.push(req.body.pose[6].position.x)
  test.push(req.body.pose[6].position.y)
  for(i=11; i<17; i++){
    test.push(req.body.pose[i].position.x)
    test.push(req.body.pose[i].position.y)
  }
  const arrString = test.join()
  console.log('array',arrString)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})