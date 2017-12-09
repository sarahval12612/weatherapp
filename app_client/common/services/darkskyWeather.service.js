(function() {

    angular
        .module('airplaneApp')
        .service('DarkskyWeather', darkskyWeather);

    darkskyWeather.$inject = ['$http'];

    function darkskyWeather($http) {
        var getWeather = function(lat, lon) {
            //darkskyapi/:lat/:lon
            lat = "35.199167";
            lon = "-101.845278";
            return $http.get('/api/darkskyapi' + '/' + lat + '/' + lon);
        };
        
        return {
            getWeather: getWeather,
        };
    }
})();
