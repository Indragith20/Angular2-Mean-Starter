var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var postDetailsSchema = new Schema({
    title: String,
    details:String,
    teamIds:[],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

postDetailsSchema.plugin(AutoIncrement, {inc_field: 'postId'});
var Model=mongoose.model('Post',postDetailsSchema);

module.exports = Model;