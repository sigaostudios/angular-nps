(function() {
    'use strict';

    angular.module('angular-nps', []);        
})();
(function(module) {
try {
  module = angular.module('angular-nps');
} catch (e) {
  module = angular.module('angular-nps', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('npsForm.html',
    '<form>\n' +
    '    <ul class="nps-flex-outer" ng-style="{\'background\': vm.style.backGround}">\n' +
    '        <!--Radio Buttons-->\n' +
    '        <li ng-show="vm.showRating">\n' +
    '            <div>How likely are you to recommend us to a friend or colleague?</div>\n' +
    '            <div name="rating" class="nps-flex-radio">\n' +
    '                <label for="1">1</br>\n' +
    '                <input type="radio" name="rating-selection" value="1" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="2">2</br>\n' +
    '                <input type="radio" name="rating-selection" value="2" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="3">3</br>\n' +
    '                <input type="radio" name="rating-selection" value="3" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="4">4</br>\n' +
    '                <input type="radio" name="rating-selection" value="4" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="5">5</br>\n' +
    '                <input type="radio" name="rating-selection" value="5" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="6">6</br>\n' +
    '                <input type="radio" name="rating-selection" value="6" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="7">7</br>\n' +
    '                <input type="radio" name="rating-selection" value="7" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="8">8</br>\n' +
    '                <input type="radio" name="rating-selection" value="8" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="9">9</br>\n' +
    '                <input type="radio" name="rating-selection" value="9" ng-model="vm.npsRating.rating">\n' +
    '                </label>\n' +
    '                <label for="10">10</br>\n' +
    '                <input type="radio" name="rating-selection" value="10" ng-model="vm.npsRating.rating" checked>\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!--Regular input-->\n' +
    '        <li ng-show="vm.showTest">\n' +
    '            <label for="first-name">First Name</label>\n' +
    '            <input type="text" id="first-name" placeholder="Enter your first name here">\n' +
    '        </li>\n' +
    '        <!--Text area-->\n' +
    '        <li ng-show="vm.showComment">\n' +
    '            <label for="message">Comments</label>\n' +
    '            <textarea rows="6" id="message" placeholder="Enter your comments here"></textarea>\n' +
    '        </li>\n' +
    '        <li ng-hide="vm.externalSubmit">\n' +
    '            <button type="submit" ng-click="vm.updateScope()" ng-style="{\'background\': vm.style.buttonColor, \'color\': vm.style.buttonTextColor}">Submit</button>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</form>');
}]);
})();

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
(function () {
    angular.module('angular-nps')
        .directive('npsForm', [NpsDirective]);

    function NpsDirective() {
        return {
            restrict: 'E',
            scope: {
                npsRating: '=rating',
                submit: '&',
                backgroundColor: '@backgroundcolor',
                buttonColor: '@buttoncolor',
                buttonTextColor: '@buttontextcolor',
                username: '@username',
                externalSubmit: '@externalsubmit'
            },
            transclude: 'true',
            templateUrl: 'npsForm.html',
            controllerAs: "vm",
            controller: NpsController
        };
    }

    NpsController.$inject = ['$scope'];
    function NpsController($scope) {
        var vm = {
            style: {
                backGround: $scope.backgroundColor,
                buttonColor: $scope.buttonColor,
                buttonTextColor: $scope.buttonTextColor
            },
            userName: $scope.username || null,
            GA: ($scope.ga == 'true'),
            showRating: true,
            showComments: false,
            showTest: false,
            submit: $scope.submit,
            npsRating: $scope.npsRating, 
            externalSubmit: ($scope.externalSubmit == 'true'),
            scope: $scope
        };

        Activate();
        return vm;

        function Activate() {     
        }
    }
})();