'use strict';

// Declare app level module which depends on views, and core components
angular.module('CatalogModule', [
  'ui.router'
]).
config(function($stateProvider) {
  var helloState = {
    name: 'browse',
    url: '/browse',
    component: 'browseComponent'
  }

  var aboutState = {
    name: 'edit',
    url: '/edit',
    component: 'editComponent'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});
