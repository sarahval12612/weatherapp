(function() {

    angular
        .module('airplaneApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'DarkskyWeather'];

    function weatherCtrl($scope, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        //vm.lat = "35.199167";
        vm.lat =  "80.373176";
        //vm.lon = "-101.845278";
        vm.lon = "95.519536";

       // vm.selectedWeight = "";

        //check selected Departure
        if (vm.lat !== null) {
            DarkskyWeather.lat = vm.lat;
            console.log("This is your lat " + DarkskyWeather.lat);
        }
        
        //check selected Arrival
        if (vm.lon!== null) {
            DarkskyWeather.lon = vm.lon
            console.log("This is your lon " + DarkskyWeather.lon);
        }

        //check selected weight
    /*    
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
    */    

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getCurrentWeather = function() {
            
            var lat = vm.lat;
            console.log(lat);
            var lon = vm.lon;
            console.log(lon);            

            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.getcurrentWeather = response.data;
                    console.log(vm.getcurrentWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...   
    /*    
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
    */
        //call services
        vm.getCurrentWeather();
       // vm.getArrivalWeather();

    }

})();
