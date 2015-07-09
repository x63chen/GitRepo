app.factory('ProductService', function() {
  var productToBuy = {};

  var addProduct = function(newObj) {
      productToBuy = angular.copy(newObj);
  };

  var getProduct = function(){
      return productToBuy;
  };

  return {
    addProduct: addProduct,
    getProduct: getProduct
  };

});
