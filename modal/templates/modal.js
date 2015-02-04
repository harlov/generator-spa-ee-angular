(function(angular) {
    'use strict';

    angular.module('<%= appname %>').controller('<%= ctrlname %>', <%= ctrlname %>);


    <%= ctrlname %>.$inject = ['$scope'];

    function <%= ctrlname %>($scope) {

    }

})(angular);
