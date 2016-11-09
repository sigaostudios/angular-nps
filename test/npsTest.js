(function () {
    'use strict';
    angular.module('npsTest', ['angular-nps'])
        .controller('Test', Test);

    function Test($scope) {
        var vm = {
            foo: 'bar',
            submit2: submit2
        };
       $scope.child ={}; 

    
        return vm;

       function submit2(){
           $scope.child.submit();
       }

    }
})();