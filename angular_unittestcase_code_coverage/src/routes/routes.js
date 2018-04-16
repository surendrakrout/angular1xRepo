//routing
registrationApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'views/registration.html',
      controller:'regController',
      controllerAs: 'regCtrl'
    })
    .otherwise({redirectTo:'views/error.html'});
});
