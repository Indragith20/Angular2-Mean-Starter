var mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var userSchema = new Schema({
    name:String,
    age:Number,
    password:String,
    userRole:String
});

var Model=mongoose.model('User',userSchema);

module.exports = Model;