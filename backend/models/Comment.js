const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  content: String,
  createDate: { 
    type: Date, 
    default: Date.now
  },
  upDate: { 
    type: Date, 
    default: Date.now
  },
  comment_parents: { 
    type: Schema.Types.ObjectId, 
    ref: 'Comment'
  },
  comment_index: { 
    type: Number, 
    default: 0 
  } // 댓글 뎁스 체크 
})

module.exports = mongoose.model('comment',commentSchema)