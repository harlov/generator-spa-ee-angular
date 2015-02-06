(function () {
    'use strict';

    var core = angular.module('appCore');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[app Error] ',
        appTitle: 'app'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }

})(angular);
