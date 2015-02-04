(function(angular) {
    'use strict';
    angular.module('<%= _.camelize(appname) %>', ['ui.utils', '<%= routerModuleName %>', 'ngAnimate']);

    angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');

    });

    angular.module('<%= _.camelize(appname) %>').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if(phase === '$apply' || phase === '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    });
})(angular);
