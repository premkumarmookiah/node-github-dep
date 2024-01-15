const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

router.get('/prem',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','firstpage.html'))
})
router.post('/kumar',(req,res,next)=>{
    res.send({Data:"String 2"});
    console.log(req.body);
})


module.exports = router;