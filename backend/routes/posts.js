const express = require('express');
const router = express.Router();
const Post = require("../models/Posts")

router.post('/post', (req, res) => {
  
  const post = new Post(req.body)

  console.log('user', post)
  
  post.save((err,post) => {
    if(err) return res.json({ success: false, err})
    
    return res.status(200).json({
      success: true
    })
  })
})


module.exports = router;