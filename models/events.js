var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var eventDetailsSchema = new Schema({
    eventName:String,
    eventStartDate:String,
    eventEndDate:String,
    eventDescription:String,
    membersDetails:{
        memberId:Number,
        memberName:String
    },
    teamDetails:{
        teamId:Number,
        teamName:String   
    }

});

eventDetailsSchema.plugin(AutoIncrement, {inc_field: 'eventId'});

var Model=mongoose.model('event',eventDetailsSchema);

module.exports = Model;