var mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var postDetailsSchema = new Schema({
    title: String,
    details:String,
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

var Model=mongoose.model('Post',postDetailsSchema);

module.exports = Model;