var express= require('express');
var router=express.Router(); 
var team=require('../models/teams');
var manager=require('../models/register');


//creating a new Team
router.post('/createTeam',function(req,res){
    var human = new team({
        teamName:req.body.teamName,
        teamDescription:req.body.teamDescription,
        members:[JSON.parse(req.query.managerId)]});
    var managerId=req.query.managerId;
    console.log("managerId is "+managerId);
    human.save(function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log("resource Details==>"+resource);
            var teamId=resource.teamId;
            manager.findOneAndUpdate({memberId:managerId},{$push: {"teams": teamId}},
                    {safe: true, upsert: true, new : true},function(err,member){
               if(err){
                    res.send(err).status(501);
               }
               else{
                   console.log("Updated Member ==>"+member);
                    res.send(resource).status(200);
               }
            })
            
        }
    })
});

//Random Generate Password
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//get the teams under specified ID
router.get('/getTeams',function(req,res){
    console.log("Teams are============>"+JSON.stringify(req.query.teamIds));
     team.find({teamId:{$in:JSON.parse(req.query.teamIds)}},function(err,resource){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log("Team Details are ====>"+JSON.stringify(resource));
            res.send(resource).status(200);
        }
    });
});


//adding new member to the team 

router.post('/addMember',function(req,res){
    console.log("New Member Details===>"+req.body.memberContact);
     manager.findOneAndUpdate({contactNumber:req.body.memberContact},{$push: {"teams": req.query.teamId}},function(err,member){
           if(!err){
               console.log("Existing Member ==>"+member);
               if(!member){
                   var autoGeneratedPassword=generatePassword();
                   member = new manager({
                        name:req.body.memberName,
                        contactNumber:req.body.memberContact,
                        password:autoGeneratedPassword,
                        teams:[req.query.teamId],
                        userRole:"Team Member"
                   })
               }
               member.save(function(err,updatedResource){
                   if(err){
                        res.send(err).status(501);
                    }
                    else{
                        console.log("Updated Member ==>"+member);
                        team.findOneAndUpdate({teamId:req.query.teamId},{$push:{"members":member.memberId}},function(err,team){
                            if(err){
                                res.send(err).status(501);
                            }
                            else{
                                res.send(updatedResource).status(200);
                            }
                        })
                        
                    }
               })
               
           } 
       }) 
});


module.exports = router;