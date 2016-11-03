(function () {
    'use strict';
    angular.module('npsTest', ['angular-nps'])
        .controller('Test', Test);

    function Test() {
        var vm = {
            foo: 'bar'
        };

        return vm;
    }
})();