'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'myApp.version',
  'CatalogModule'
])

app.constant('config', {
  apiUrl: 'http://localhost:54819/'
});
