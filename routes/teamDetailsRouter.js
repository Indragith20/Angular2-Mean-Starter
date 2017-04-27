var express= require('express');
var mongoose=require('mongoose');
var router=express.Router(); 
var Member=require('../models/register');


router.get('/getMembers',function(req,res){
    var teamId=req.query.teamId;

    Member.find({teams:teamId},function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            res.send(resource).status(200);
        }
    });
});

module.exports=router;