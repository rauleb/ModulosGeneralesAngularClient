'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.compras
 * @description
 * # compras
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('compras', function ($resource) {
    return $resource('http://localhost:8000/api/compra');
  })
  .factory('detalle-compra', function($resource){
    return $resource('http://localhost:8000/api/detalle-compra');
  });
