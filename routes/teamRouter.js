var express= require('express');
var router=express.Router(); 
var team=require('../models/teams');
var manager=require('../models/register');

router.post('/createTeam',function(req,res){
    var human = new team(req.body);
    var managerId=req.query.managerId;
    console.log("managerId is "+managerId);
    human.save(function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log("resource Details==>"+resource.teamId);
            var teamId=resource.teamId;
            manager.findByIdAndUpdate({_id:managerId},{$push: {"teams": teamId}},
                    {safe: true, upsert: true, new : true},function(err,member){
               if(err){
                    res.send(err).status(501);
               }
               else{
                   console.log("Updated Member ==>"+member);
                    res.json(member).status(200);
               }
            })
            
        }
    })
});

// router.get('/getPosts',function(req,res){
//      Model.find({},function(err,resource){
//         if(err){
//             res.send(err).status(501);
//         }
//         else{
//             console.log(resource);
//             res.send(resource).status(200);
//         }
//     });
// });


module.exports = router;