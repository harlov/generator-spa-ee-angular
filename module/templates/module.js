(function(angular) {
    'use strict';

    angular.module('<%= _.camelize(name) %>', ['appCore']);
    angular.module('<%= _.camelize(name) %>').config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        /* Add New States Above */

    };

})(angular);
