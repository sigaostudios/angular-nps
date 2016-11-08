
(function() {
    angular.module('angular-nps')
        .directive('npsForm', NpsDirective)
        .controller('npsController', NpsController);

    function NpsDirective() {
        return {
            controller: "npsController as vm",
            restrict: 'E',
            templateUrl: 'npsForm.html'
        };
    }

    NpsController.$inject = ['$scope', '$element', '$attrs', '$npsapi'];

    function NpsController($scope, $element, $attrs, $npsapi) {

        var vm = {
            style: {
                backGround: $attrs.backgroundcolor,
                buttonColor: $attrs.buttoncolor,
                buttonTextColor: $attrs.buttontextcolor
            },
            userName: $attrs.username || null,
            GA: $attrs.ga || false,
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
            if (vm.npsRating) {
                var data = {
                    UserName: vm.userName,
                    score: vm.npsRating
                };
     
                $npsapi.saveScore(data);

                if (vm.GA) {         
                    $npsapi.saveScoreToGA(data);
                }
            }
        }
    }
})();