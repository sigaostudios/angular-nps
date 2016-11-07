(function () {
    'use strict';

    angular.module('angular-nps')
        .factory('$npsapi', $NpsApi);

    function $NpsApi($http, $q) {
        var api = {
            saveScore: saveScore,
            test: test,
            apiBase: '/sigaoapi/'
        };

        return api;

        function test() {
            console.log("here");
            return $http.get(api.apiBase + 'nps')
                .then(function (data) {
                    console.log("callback--:" + data);
                }, function(error){
                    console.log("error:" + error);
                });
        }

        function saveScore(score) {
            var deferred = $q.defer();
            deferred.resolve({
                Value: "Success!"
            });
            return deferred.promise;
        }
    }

})();