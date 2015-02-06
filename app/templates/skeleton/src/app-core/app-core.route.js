(function() {
    'use strict';

    angular
        .module('appCore')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider.state('404', {
            url: '/404',
            templateUrl: 'app-core/404.html',
            title: '404'
        });
    }

})(angular);
