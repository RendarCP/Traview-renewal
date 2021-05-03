// [ENV] 환경변수 관리
require('dotenv').config();

// Packages 관리 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
// const cookieParser = require("cookie-parser");
const port = 8080

// DB연결

app.use(cors())
// -> body-parser express 빌트인 버전
app.use(express.json())

app.get('/',(req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})