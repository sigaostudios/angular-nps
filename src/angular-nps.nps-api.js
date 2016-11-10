(function () {
    'use strict';

    angular.module('angular-nps')
        .factory('$npsapi', $NpsApi);

 $NpsApi.$inject = ['$http', '$q'];

    function $NpsApi($http, $q) {
        var api = {
            saveScore: saveScore,
            saveScoreToGA: saveScoreToGA,
            test: test,
            apiBase: '/sigaoapi/nps',
            dimensionName: 'NPS SigaoStudios'
        };

        return api;

        function test() {
            return $http.get(api.apiBase)
                .then(function (data) {                    
                    return data.data;
                }, function (error) {
                    return error.data;
                });
        }

        function saveScore(score) {
            return $http.post(api.apiBase, score)
                .then(function (data) {
                    return data.data;
                }, function (error) {                    
                    return error.data;
                });
        }

        function saveScoreToGA(score) {
            var gaScore = {};
            gaScore[api.dimensionName] = score.score;
            ga('send', 'user', gaScore);
            return "Success!";
        }
    }

})();