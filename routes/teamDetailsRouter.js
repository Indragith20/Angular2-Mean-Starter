var express= require('express');
var mongoose=require('mongoose');
var router=express.Router(); 
var Member=require('../models/teams');


router.get('/getMembers',function(req,res){
    console.log("Member IDs without parsing==>"+req.query.memberIds);
    console.log("Member Ids==>"+JSON.parse(req.query.memberIds));
    Member.find({"_id":{$in:mongoose.Types.ObjectId(JSON.parse(req.query.memberIds))}},function(err,resources){
        console.log("resources found==>"+resources);
        if(err){
            res.send(err).status(501);
        }
        else{
            res.send(resources).status(200);
        }
    });
});

module.exports=router;