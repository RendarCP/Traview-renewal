const express = require('express');
const router = express.Router();
const { User } = require("../models/Users")

// 회원가입 
router.post('/register', (req, res) => {
  
  const user = new User(req.body)
  
  user.save((err,user) => {
    if(err) return res.json({ success: false, err})
    
    return res.status(200).json({
      success: true
    })
  })
})

// 로그인 
router.get('/login', (req, res) => {
  
  const user = new User(req.body)
  
  user.find((err, user) => {
    if(err) return res.json({ success: false, err})
   
    return res.status(200).json({
      success: true,
      user 
    })
  })
})

module.exports = router;