'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ComprasCtrl
 * @description
 * # ComprasCtrl
 * Controller of the modulosGeneralesApp
 */


/*function DialogController($scope, $mdDialog, cmp) {
  console.log('entre en el controlodar del dialogo');
  $scope.compra = cmp;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}*/

angular.module('modulosGeneralesApp')
  .controller('ComprasCtrl',['$scope','compras','$mdDialog', function ($scope, compras, $mdDialog) {

    compras.get(function (response) {
      $scope.compras = response.results;
    });

    $scope.showAdvanced = function(ev,compra) {
      console.log('hola');
      $mdDialog.show({
        controller: ['$scope','$mdDialog','cmp', function ($scope, $mdDialog, cmp) {
          console.log('entre en el controlodar del dialogo');
          $scope.compra = cmp;
          $scope.hide = function() {
            $mdDialog.hide();
          };
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }],
        templateUrl: 'views/dialogs/dialog1.html',
        targetEvent: ev,
        locals: {cmp: compra},
        bindToController: true
      })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    };
  }]);

