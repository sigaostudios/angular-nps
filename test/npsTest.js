(function () {
    'use strict';
    angular.module('npsTest', ['angular-nps'])
        .controller('Test', Test);

    function Test($scope) {
        var vm = {
            foo: 'bar',
            submit: submit
        };
       $scope.child ={}; 

    
        return vm;

       function submit(){
           $scope.child.submit();
       }

    }
})();