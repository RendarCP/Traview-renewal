const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String, // 아이디
  passwd: String, // 비밀번호
  name: String, // 이름
  nickName: String, // 닉네임
  email: {
    type: String,
    unique: true,
  },
  token: String, // 토큰 값
  tokenExp: Number, // 토큰 기간
  gender: String, // 성별
  createDate:{ 
    type: Date, 
    default: Date.now
  }, // 유저 생성일
  upDate: { 
    type: Date, 
    default: Date.now
  }, // 유저 업데이트 일
  image: String, // 사진 
  role: { 
    type: String, 
    default: 'USER'
  }, // 유저 권한 관리
  birthDay: Date,
})

const User = mongoose.model('users',userSchema)

module.exports = { User }