const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  content: String,
  tag: Array,
  like: Array,
  createDate: { type: Date, default: Date.now},
  upDate: { type: Date, default: Date.now},
  comments: { type: Schema.Types.ObjectId, ref: 'Comment'},
  type: { tpye: String, default: "POST"},
})