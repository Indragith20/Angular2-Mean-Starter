var mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var userDetailsSchema = new Schema({
    name:String,
    contactNumber:Number,
    password:String,
    userRole:String,
    teams:[],
    posts:[],
    comments:[]
});

var Model=mongoose.model('User',userDetailsSchema);

module.exports = Model;