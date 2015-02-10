(function(angular) {
    'use strict';

    angular.module('<%= _.camelize(name) %>', ['appCore']);
    angular.module('<%= _.camelize(name) %>').config(config);


    function config($stateProvider, $urlRouterProvider) {

        /* Add New States Above */

    }

})(angular);
