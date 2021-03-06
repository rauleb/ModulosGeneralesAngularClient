'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.ventas
 * @description
 * # ventas
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('ventas', function ($resource) {
    return $resource('http://localhost:8000/api/ventas');
  })
  .factory('detalleVenta', function ($resource){
    return $resource('http://localhost:8000/api/detalle-venta');
  });
