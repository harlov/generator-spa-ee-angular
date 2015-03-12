(function(angular) {
    'use strict';

    angular.module('<%= appname %>').controller('<%= ctrlname %>', <%= ctrlname %>);

    function <%= ctrlname %>() {
        var <%= controllerAs %> = this;

        /* put bindable members here like
         <%= controllerAs %>.buttonClick = buttonClick;
          */

        init();


        function init() {
            //do stuff to init controller
        }
    }
})(angular);
