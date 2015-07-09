app.factory('ProductService', function() {
  var productToBuy = {};

  var addProduct = function(newObj) {
      productToBuy = angular.copy(newObj);
  };

  var getProduct = function(){
      console.log(productToBuy);
      return productToBuy;
  };

  return {
    addProduct: addProduct,
    getProduct: getProduct
  };

});
