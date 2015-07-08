// app/models/product.js
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('product', {

    productname : {type : String, default: ''},
    productid : {type : String, default: ''},
    productdescription : {type : String, default: ''},
    price : {type : String, default: ''},
    effectivedate : {type : String, default: ''},
    expirydate : {type : String, default: ''},
    ownerid : {type : String, default: ''},
    paymentinstruction : {type : String, default: ''},
    image : {type : String, default: ''},
});
