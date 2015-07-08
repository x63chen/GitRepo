// app/models/Purchase.js
// grab the mongoose module
var mongoose = require('mongoose');

// define purchase model
// paid and shipped fields indicate the order was paid for and shipped respectively
module.exports = mongoose.model('Purchase', {

    userid    : {type : String, default: ''},
    quantity  : {type : String, default: ''},
    cost      : {type : String, default: ''},
    productid : {type : String, default: ''},
    datepurch : {type : String, default: ''},
    pmttype   : {type : String, default: ''},
    delivtype : {type : String, default: ''},
    comments  : {type : String, default: ''},
    paid      : {type : String, default: ''},
    pmtdate   : {type : String, default: ''},
    delivered : {type : String, default: ''},
    delivdate : {type : String, default: ''}
	
 });
