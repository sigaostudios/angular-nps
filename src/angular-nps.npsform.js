
(function () {



    angular.module('angular-nps', [])
        .directive('npsForm', npsDirective)
        .controller('npsController', npsController);

    function npsDirective() {
        return {
            controller: "npsController as vm",
            restrict: 'E',
            templateUrl: 'npsForm.html'
        };
    }

    npsController.$inject = ['$scope', '$element', '$attrs'];

    function npsController($scope, $element, $attrs) {

        //place data-config="" in the tag to pass data into this controller
        //use $attrs.config to use passed attributes

        var vm = {
            showRating: true,
            showComments: false,
            showTest: false,
            submit: submit,
            npsRating: null
        }

        Activate();

        return vm;

        function Activate() {

            console.log('Activated');
        }

        function submit() {
            console.log(vm.npsRating);
        }
    }



})();