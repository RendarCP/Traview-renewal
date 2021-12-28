// [ENV] 환경변수 관리
require('dotenv').config();

// Packages 관리 
const express = require('express')
const app = express()

const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
// const cookieParser = require("cookie-parser");
const port = process.env.port || 8080

// DB연결
const db_uri = process.env.MONGO_URI
const connection = mongoose.connection;
connection.on('error', console.error)
connection.once('open', () => {
  console.log("Connected to mongodb Server")
})
mongoose.connect(db_uri)
    .then(() => console.log('Successfully connected to ' + db_uri))
    .catch(e => console.error(e));

// cors미들 웨어 추가 
app.use(cors())
// -> body-parser express 빌트인 버전
app.use(express.json())

app.use('/api',require('./routes/users')) // 회원로그인 라우터

app.get('/',(req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})