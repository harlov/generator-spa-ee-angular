(function(angular) {
    'use strict';

    angular.module('<%= appname %>').controller('<%= ctrlname %>', <%= ctrlname %>);

    // delete if not needed
    <%= ctrlname %>.$inject = ['$scope'];

    function <%= ctrlname %>($scope) {
        var <%= controllerAs %> = this;
    }
})(angular);
