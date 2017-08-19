var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var userDetailsSchema = new Schema({
    name:String,
    contactNumber:Number,
    password:String,
    userRole:String,
    emailId:String,
    profileImage:{type:String,default:'/uploads/default.jpg'},
    activeStatus:Boolean,
    teams:[],
    posts:[],
    comments:[]
});


userDetailsSchema.plugin(AutoIncrement, {inc_field: 'memberId'});
var Model=mongoose.model('User',userDetailsSchema);

module.exports = Model;