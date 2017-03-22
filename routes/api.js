var express= require('express');
var router=express.Router(); 
var Model=require('../models/register');

router.get('/human',function(req,res){
    Model.find({},function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log(resource);
            res.send(resource).status(200);
        }
    });
});


router.get('/checkUser',function(req,res){
    var userName=req.query.username;
    var passWord=req.query.password;
    console.log(userName);
    Model.findOne({'name':userName,'password':passWord},function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log(resource);
            
            
            res.json(resource);
        }
    });
});


router.post('/human',function(req,res){
    var human = new Model(req.body);
    human.save(function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            res.json(resource).status(200);
        }
    })
});

module.exports = router;