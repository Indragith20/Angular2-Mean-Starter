var express= require('express');
var router=express.Router();
var path = require('path');
var member=require('../models/register');

router.get('/',function(req,res){
    var memberId=req.query.id;
    var options = { new: true }; 
    member.findOneAndUpdate({memberId:memberId},{activeStatus:true},options,function(err,resource){
        if(err){
            res.sendFile(path.resolve('./client/views/error.html'));
        }
        else{
            console.log("resource==>"+resource);
            res.sendFile(path.resolve('./client/views/verify.html'));
        }
    })
})

module.exports=router;