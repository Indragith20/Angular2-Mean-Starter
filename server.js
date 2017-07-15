var port = 4000;
// var DB ="mongodb://localhost/profileManager"


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

var app = express();
app.use(morgan('dev'));
app.set('superSecret', config.secret);
// app.set('DB',config.database);
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

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
app.use('/post',postRouter);
app.use('/team',teamRouter);
app.use('/teamDetails',teamDetailsRouter);
app.use('/events',eventRouter);
// app.use('*',mainRouter);


app.set('views',path.join(__dirname,'/client/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'client'))); 



app.listen(port); 
