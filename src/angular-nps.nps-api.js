(function() {
    'use strict';

    angular.module('angular-nps')
        .factory('$npsapi', $NpsApi);

    function $NpsApi($http, $q) {
        var api = {
            saveScore: saveScore,
            test: test
        };

        return api;

        function test(){
            return "Hello World!";
        }

        function saveScore(score){
            var deferred = $q.defer();
            deferred.resolve({Value:"Success!"});
            return deferred.promise;
        }
    }

})();