const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const saltRounds = 10;

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


userSchema.pre('save', function(next) {
  const user = this;
  console.log('backend' , this);
  if(user.isModified('passwd')){
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if(err) return next(err);

      bcrypt.hash(user.passwd, salt, (err, hash) => {
        if(err) return next(err);
        user.passwd = hash
        next()
      })
    })
  }
  else{
    next()
  }
})

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.passwd, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch)
  })
}
// userSchema.methods.comparePassword = function (plainPassword) {
//   //plainPassword를 암호화해서 현재 비밀번호화 비교
//   return bcrypt
//     .compare(plainPassword, this.password)
//     .then((isMatch) => isMatch)
//     .catch((err) => err);
// };

const User = mongoose.model('users',userSchema)

module.exports = { User }