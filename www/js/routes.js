angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('equipamentos', {
    url: '/trackers',
    templateUrl: 'templates/equipamentos.html',
    controller: 'equipamentosCtrl'
  })

  .state('mapa', {
    url: '/tracker/map',
	params: {
		tracker_eui: ""		
},
    templateUrl: 'templates/mapa.html',
    controller: 'mapaCtrl'
  })

$urlRouterProvider.otherwise('/trackers')


});