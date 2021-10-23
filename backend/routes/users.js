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
router.post('/login', (req, res) => {
  
  User.findOne({$and:[{userId: req.body.userId}, {passwd: req.body.passwd}], }, (err, user) => {
    if(err) return res.json({ success: false, err})

    return res.status(200).json({
      loginSuccess: true,
      user
    })

    // if(!user){
    //   return res.json({
    //     loginSuccess: false,
    //     message: "Auth Fail"
    //   })
    // }

    // user.comparePassword(req.body.password), (err, isMatch) => {
    //   if(!isMatch) return res.json({ loginSuccess: false, message: "Wrong password" });
    //   if(err) return res.status(400).send(err);
      
    //   return res.status(200).json({
    //     loginSuccess: true,
    //     user 
    //   })
    // }
   
  })
})

module.exports = router;