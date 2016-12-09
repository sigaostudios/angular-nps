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