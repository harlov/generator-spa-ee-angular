(function(angular) {
'use strict';

angular
.module('appCore').constant('apiConfig',
    {
        url: window.location.protocol+'//api.youservice.com/api/v1',
    }
);
})(angular);