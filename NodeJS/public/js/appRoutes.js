// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .when('/Register', {
            templateUrl: 'views/Register.html',
            controller: 'RegisterCtrl'
        })

        .when('/AddProduct', {
            templateUrl: 'views/Product.html',
            controller: 'ProductCtrl'
        })
        .when('/ConfirmPurchase', {
            templateUrl: 'views/confirmPurchase.html',
            controller: 'PurchaseCtrl'
        })
        .when('/Login', {
            templateUrl: 'views/Login.html',
            controller: 'LoginCtrl'
        });

    $locationProvider.html5Mode(true);

}])
.run(function($rootScope, $location,LoginService) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(!LoginService.userAuthenticated()) {
      $location.path('/Register');
    }
  });
});
