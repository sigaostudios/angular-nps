(function() {
    'use strict';

    angular.module('angular-nps', []);        
})();
(function () {
    'use strict';

    angular.module('angular-nps')
        .factory('$npsapi', $NpsApi);

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
(function() {
    'use strict';

    angular.module('angular-nps')
        .directive('npsForm', NpsForm);

    function NpsForm() {
        return  {
            restrict: 'E',
            replace: true,
            template: '<span><p>How likely are you to recommend us to a friend or colleague?</p><input type="radio" name="nps" value="0">0<input type="radio" name="nps" value="1">1<input type="radio" name="nps" value="2">2<input type="radio" name="nps" value="3">3<input type="radio" name="nps" value="4">4<input type="radio" name="nps" value="5">5<input type="radio" name="nps" value="6">6<input type="radio" name="nps" value="7">7<input type="radio" name="nps" value="8">8<input type="radio" name="nps" value="9">9<input type="radio" name="nps" value="10">10<button>Submit Score</button></span>'
        };
    }
})();