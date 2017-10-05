var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
    userId:Number,
    socketId:String,
    notifications:[{
        url:String,
        message:String
    }]
});



notificationSchema.plugin(AutoIncrement, {inc_field: 'notificationId'});
var Model=mongoose.model('notification',notificationSchema);

module.exports = Model;