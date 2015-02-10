(function(angular) {
    'use strict';

    angular.module('<%= appname %>').controller('<%= ctrlname %>', <%= ctrlname %>);

    function <%= ctrlname %>($scope) {
        var <%= controllerAs %> = this;
    }
})(angular);
