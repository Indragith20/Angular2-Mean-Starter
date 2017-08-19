var express=require('express');
var multer = require('multer');
var path = require('path');
var router=express.Router();
var Model=require('../models/register');

//app.use(express.static(path.join(__dirname, 'uploads')));

router.get('/getProfile',function(req,res){
    var profileTo=req.query.profileId;

    Model.find({memberId:profileTo},function(err,profile){
        if(err){
            res.send(err).status(501);
        }
        else{
            res.json(profile).status(200);
        }
     })

});


var storage = multer.diskStorage({
  // Destination
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // Rename FIle
  filename: function (req, file, cb) {
    console.log("NAme is =>" +req.body.Name);
    cb(null, req.body.Name+req.body.Id+path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage });

router.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  console.log("NAme is =>" +req.files.path);
  Model.findOneAndUpdate({memberId:req.body.Id},{$set:{profileImage:'/uploads/'+req.body.Name+req.body.Id+path.extname(req.files[0].originalname)}},{ new: true },function(err,profile){
    if(err){
        res.send(err).status(501);
    }
    else{
        res.json(profile).status(200);
    }
 })  
  //res.send(req.files);
});



module.exports = router;