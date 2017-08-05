var express=require('express');
var router=express.Router();
var Model=require('../models/register');

router.get('/getProfile',function(req,res){
    var profileTo=req.query.profileId;

    Model.find({memberId:profileTo},function(err,profile){
        if(err){
            res.send(err).status(501);
        }
        else{
            res.send(profile).status(200);
        }
     })

});


module.exports = router;