var port = 4000;

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var jwt    = require('jsonwebtoken');

var config=require('./config/config');
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var postRouter = require('./routes/postRouter');
var teamRouter = require('./routes/teamRouter');
var teamDetailsRouter = require('./routes/teamDetailsRouter');
var eventRouter = require('./routes/eventRouter');
var profileRouter = require('./routes/profileRouter');
var verifyRouter = require('./routes/verifyRouter');

var app = express();
app.use(morgan('dev'));
app.set('superSecret', config.secret);
// app.set('DB',config.database);
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));


var verifyUrl=function(req,res,next){
     var token=req.body.token || req.query.token || req.headers['x-access-token'] || req.body.headers.Authorization[0] || req.body.x-access-token;
        console.log("Inside the authetication part token==>"+token);
        if(token){
            jwt.verify(token,req.app.get('superSecret'),function(err,decoded){
                if(err){
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                }
                else{
                    req.decoded=decoded;
                    next();
                }
            });
        }
        else{
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });
        }

    }

mongoose.connect(config.database,function(err){
    if(err){
        return err;
    }
    else{
        console.log("Success Connected to "+config.database);
    }
});


app.use('/',mainRouter);
app.use('/api',apiRouter);
app.use('/post',verifyUrl,postRouter);
app.use('/team',verifyUrl,teamRouter);
app.use('/teamDetails',verifyUrl,teamDetailsRouter);
app.use('/events',verifyUrl,eventRouter);
app.use('/profile',profileRouter);
app.use('/verify',verifyRouter);
// app.use('*',mainRouter);


app.set('views',path.join(__dirname,'/client/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'client'))); 
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));



app.listen(port); 
