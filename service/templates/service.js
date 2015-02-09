(function(angular) {
    'use strict';

    angular.module('<%= appname %>').service('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

    <%= _.camelize(name) %>.$inject = [];
    function <%= _.camelize(name) %>() {

    });

})(angular);
