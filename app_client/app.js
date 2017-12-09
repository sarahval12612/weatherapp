(function () {
  
  angular.module('airplaneApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("BEING AIRPLANE SERVICES APP - MEAN STACK DRIVEN");
    
    $routeProvider
   /*
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
  */
      .when('/weather/', {
        templateUrl: '/weather/weather.view.html',
        controller: 'weatherCtrl',
        controllerAs: 'vm'
      })      
      .otherwise({redirectTo: '/weather/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('airplaneApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();