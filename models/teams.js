var mongoose  = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var teamDetailsSchema = new Schema({
    teamName:String,
    teamDescription:String,
    members:[]
});

teamDetailsSchema.plugin(AutoIncrement, {inc_field: 'teamId'});

var Model=mongoose.model('team',teamDetailsSchema);

module.exports = Model;