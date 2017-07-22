var express= require('express');
var router=express.Router(); 
var Model=require('../models/register');
var jwt    = require('jsonwebtoken');


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
            // res.send(err).status(501);
            res.json({ success: false, message: 'Authentication failed.' });
        }
        else{
            console.log(resource);
            if(resource){
                console.log("secret ==>"+req.app.get('superSecret'));
                var token = jwt.sign({user: userName}, req.app.get('superSecret'), {
                    expiresIn: '1d' // expires in 24 hours
                    });
                res.json({
                    success: true,
                    message: 'Logged In Successfully',
                    token: token,
                    loggedUserDet:resource
                });
            }
            else{
                res.json({ success: false, message: 'Authentication failed.' });
            }
            
            // res.json(resource);
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