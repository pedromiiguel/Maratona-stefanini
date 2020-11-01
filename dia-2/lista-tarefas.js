(function() {
    "use strict";

    angular.module('lista-tarefasApp', []);

    angular.module('lista-tarefasApp')
    .controller('listaTarefasController', listaTarefasController)

    listaTarefasController.$inject = ['$scope'];

    function listaTarefasController ($scope) {
        $scope.alerta = () => {
            console.log(alerta);
        }

        $scope.teste = 'Teste'
    }


})();