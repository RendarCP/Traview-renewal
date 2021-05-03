const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  userId: String, // 유저
  title: String, // 스케쥴의 제목
  country: String, // 나라
  city: String, // 도시
  startDate: Date, // 시작 날짜
  endDate: Date, // 종료 날짜
  content: String, // 내용
})