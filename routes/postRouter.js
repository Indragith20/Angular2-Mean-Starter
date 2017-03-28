var express= require('express');
var router=express.Router(); 
var Model=require('../models/posts');


router.post('/',function(req,res){
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

router.get('/getPosts',function(req,res){
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


module.exports = router;