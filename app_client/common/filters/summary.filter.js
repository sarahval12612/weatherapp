(function() {

    angular
        .module('airplaneApp')
        .filter('summary', summaryFilter);
        
    function summaryFilter() {
        return function(input){
        
            var output = input.toUpperCase();  
        
            return output;
        };

    }
})();