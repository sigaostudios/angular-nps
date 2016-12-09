(function () {
    'use strict';
    angular.module('npsTest', ['angular-nps'])
        .controller('Test', Test);

    function Test($scope) {
        var vm = {
            foo: 'bar',
            submit2: submit2,
            npsRating: {rating: 3}
        };
    
        return vm;

       function submit2(){
           alert(vm.npsRating.rating);
           vm.npsRating.rating = 3;
       }

    }
})();