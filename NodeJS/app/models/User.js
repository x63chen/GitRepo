// app/models/User.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {

    userid : {type : String, default: ''},
    firstname : {type : String, default: ''},
    lastname : {type : String, default: ''},
    email : {type : String, default: ''},
    password : {type : String, default: ''},
    addressL1 : {type : String, default: ''},
    addressL2 : {type : String, default: ''},
    phone : {type : String, default: ''},
    comments : {type : String, default: ''}

});
