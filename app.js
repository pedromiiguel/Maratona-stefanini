(function() {
    "use strict";

    angular
    .module("app", [])
    .controller('controlador', function ($scope) {


        $scope.cont = 0

        $scope.add = function (){
            $scope.cont ++;
        }

        $scope.sub = function (){
            $scope.cont --;
        }


    })

})();