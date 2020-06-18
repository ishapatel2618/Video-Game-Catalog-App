'use strict';

angular
    .module('CatalogModule')
    .component('browseComponent', component());


function component() {

    function componentController($scope, $http, config) {
        var vm = this;

        init();

        function init() {
            $http({
                method: 'GET',
                url: `${config.apiUrl}api/getallgames`,
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
                }
            }).then(function successCallback(response) {
                $scope.videoGames = angular.fromJson(response.data);
            }, function errorCallback(response) {
            });
        }
    }

    return {
        bindings: {},
        controller: componentController,
        controllerAs: '${ctrl}',
        templateUrl: './catalog/browse/browse.html'
    }
}

