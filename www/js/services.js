angular.module('app.services',[])

.factory('BlankFactory', [function(){

}])

.service('trackersService', ['$http','$q',function($http,$q){
    return {
        getTrackers: function(){
            var deferred = $q.defer();
            url = 'http://localhost:3000/trackers';
            $http.get(url).then(function(response){
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
        getTracker: function(tracker_eui){
            var deferred = $q.defer();
            url = 'http://localhost:3000/trackers/' + tracker_eui;
            $http.get(url).then(function(response){
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
        getLocation: function(tracker_eui){
            var deferred = $q.defer();
            url = 'http://localhost:3000/trackers/' + tracker_eui + '/location';
            $http.get(url).then(function(response){
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
        calculateDistance: function (lat1,lon1,lat2,lon2) {

            function deg2rad(deg) {
                return deg * (Math.PI/180)
            }

            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            
            return d;
        }
    }
}]);