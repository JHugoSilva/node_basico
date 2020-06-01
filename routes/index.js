const express = require('express')

const router = express.Router()

router.get('/',(req, res)=>{
    let obj = {
      'nome':'Hugo',
      'idade':'88'
    }
  res.render('home', obj) 
})

module.exports = router