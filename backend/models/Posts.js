const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // userId: String,
  usename: String,
  title: String,
  description: String,
  content: String,
  tag: Array,
  like: Array,
  contryId: Number,
  createDate: { 
    type: Date, 
    default: Date.now
  },
  upDate: { 
    type: Date, 
    default: Date.now
  },
  //comments: { type: Schema.Types.ObjectId, ref: 'Comment'},
  comments: Array,
  // type: { tpye: String, default: "POST"},
})

module.exports = mongoose.model('posts',postSchema)