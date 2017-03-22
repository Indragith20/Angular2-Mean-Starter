var mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var userDetailsSchema = new Schema({
    name:String,
    age:Number,
    password:String,
    userRole:String
});

var Model=mongoose.model('User',userDetailsSchema);

module.exports = Model;