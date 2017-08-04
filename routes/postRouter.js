var express= require('express');
var router=express.Router(); 
var Model=require('../models/posts');


router.post('/',function(req,res){
    var post=JSON.parse(req.query.postDet);
    var human = new Model({
        title:post.title,
        details:post.details,
        teamIds:[post.teamDet],
        postedBy:post.postedBy
    });
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
    var teams=JSON.parse(req.query.teamIds);
    console.log("Team Ids from Get Posts==>"+req.query.teamIds);
    //  Model.find({teamIds:{$elemMatch:{teamId:{$in:[teams]}}}},function(err,resource){
        Model.find({'teamIds.teamId':{$in:teams}},{_id:0,postId:0,teamIds:0},{sort:{createdAt: -1}},function(err,resource){
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