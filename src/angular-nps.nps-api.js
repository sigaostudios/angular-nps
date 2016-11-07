(function () {
    'use strict';

    angular.module('angular-nps')
        .factory('$npsapi', $NpsApi);

    function $NpsApi($http, $q) {
        var api = {
            saveScore: saveScore,
            test: test,
            apiBase: '/sigaoapi/nps'
        };

        return api;

        function test() {
            return $http.get(api.apiBase)
                .then(function (data) {
                    console.log(data.data);
                    return data.data;
                }, function (error) {

                    return error;
                });
        }

        function saveScore(score) {
            return $http.post(api.apiBase, score)
                .then(function (data) {
                    return data.data;
                }, function (error) {
                    console.log(error.data);
                    return error.data;
                });
        }
    }

})();