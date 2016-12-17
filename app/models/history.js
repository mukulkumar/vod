// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('History', {
	userid:{type : String, default: ''},
	id : {type : String, default: ''},
	title : {type : String, default: ''},
	description : {type : String, default: ''},
	thumbUrl : {type : String, default: ''},
	duration : { type: Number },
	publishedDate : { type: Number }
});

