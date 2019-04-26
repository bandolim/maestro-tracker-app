angular.module('app.controllers', [])
  
.controller('equipamentosCtrl', ['$scope', '$stateParams', 'trackersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, trackersService) {
    
    trackersService.getTrackers().then(function(data){
        $scope.trackers = data.response;
        console.log(data);
    });
    
}])
   
.controller('mapaCtrl', ['$scope', '$stateParams', 'trackersService', 'uiGmapGoogleMapApi', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, trackersService, uiGmapGoogleMapApi) {
    
    $scope.distance = 57;
    
    trackersService.getTracker($stateParams.tracker_eui).then(function(data){
        $scope.tracker = data.response;
        console.log(data);
    });
    
    trackersService.getLocation($stateParams.tracker_eui).then(function(data){
        $scope.tracker_location = data.response;
        console.log(data);
        
        uiGmapGoogleMapApi.then(function(maps){    
            $scope.map = {
                center: {
                    latitude: $scope.tracker_location.latitude,
                    longitude: $scope.tracker_location.longitude
                },
                zoom: 18,
                options: {
                    mapTypeId: google.maps.MapTypeId.SATELLITE, 
                    streetViewControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    zoomControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    gestureHandling: 'greedy'
                },
                /*
                bounds: {
                    northeast: { latitude: -29.877988, longitude: -51.1881079 },
                    southwest: { latitude: -29.881276, longitude: -51.1918212 }
                },
                */
                showTraficLayer: false
            };
        });
        
    });

    trackersService.getCurrentLocation();
    
    
}])
 