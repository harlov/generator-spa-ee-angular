(function(angular) {
'use strict';

angular
.module('appCore').constant('apiConfig',
    {
        url: 'http://localhost:8080/api/v1/',
    }
);
})(angular);