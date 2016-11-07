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