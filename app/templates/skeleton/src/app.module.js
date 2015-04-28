(function(angular) {
    'use strict';

    /*
     * here is the right place to configure shared modules like app.appCore and feature-module
     * app.appCore defines the dependencies to angular and third party modules
     * any feature module should depend on app.appCore and possible other shared modules
     */

    /**
     * @ngdoc: overview
     * @name: <%= _.camelize(appname) %>
     *
     */
    angular.module('<%= _.camelize(appname) %>', ['appCore']);
    angular.module('<%= _.camelize(appname) %>').run(<%= _.camelize(appname) + 'Run' %>);

    /* @ngInject */
    function <%= _.camelize(appname) + 'Run' %>(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [

            /* Add New States Above */
        ];
    }

})(angular);
