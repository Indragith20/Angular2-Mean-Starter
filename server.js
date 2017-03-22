var port = 4000;
var DB ="mongodb://localhost/profileManager"


var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();
app.use(morgan('dev'));
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

mongoose.connect(DB,function(err){
    if(err){
        return err;
    }
    else{
        console.log("Success Connected to "+DB);
    }
});


app.use('/',mainRouter);
app.use('/api',apiRouter);



app.set('views',path.join(__dirname,'/client/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'client'))); 


app.listen(port); 
