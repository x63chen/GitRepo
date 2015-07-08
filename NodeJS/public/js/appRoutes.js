// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .when('/Register', {
            templateUrl: 'views/Register.html',
            controller: 'RegisterController'
        })

        .when('/Login', {
            templateUrl: 'views/Login.html',
            controller: 'LoginController'
        });

    $locationProvider.html5Mode(true);

}]);
