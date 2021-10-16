const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schedulesSchema = new Schema({
  userId: String, // 유저
  title: String, // 스케쥴 제목
  content: String, // 스케쥴 정보
  schedules: Array, // 스케쥴들
})

module.exports = mongoose.model('schedules',schedulesSchema)