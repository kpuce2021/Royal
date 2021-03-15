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
  var test = req
  //console.log('test', test);
  // console.log('req',req.body['pose'])
})

app.post('/', (req, res) => {
  res.send("post 요청")
  console.log('post 요청',req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})