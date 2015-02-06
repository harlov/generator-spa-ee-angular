(function(angular) {
    'use strict';

    /**
     * here is the right place to configure shared modules like app.core and feature-module
     * app.core defines the dependencies to angular and third party modules
     * any feature module should depend on app.core and possible other shared modules
     */
    angular.module('<%= _.camelize(appname) %>', ['app.core']);

})(angular);
