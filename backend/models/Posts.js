const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
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
  comments: {Object},
  type: { tpye: String, default: "POST"},
})

module.exports = mongoose.model('posts',postSchema)