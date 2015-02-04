(function(angular) {
    'use strict';

    angular.module('<%= _.camelize(name) %>', ['ui.bootstrap', 'ui.utils', '<%= routerModuleName %>', 'ngAnimate']);
    angular.module('<%= _.camelize(name) %>').config(function($stateProvider) {

        /* Add New States Above */

    });

})(angular);
