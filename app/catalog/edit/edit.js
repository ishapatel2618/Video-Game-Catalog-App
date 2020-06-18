'use strict';

angular
    .module('CatalogModule')
    .component('editComponent', component());

function component() {

    function componentController($scope, $http, config) {
        var vm = this;
        init();

        function init() {
            //Call reload function here
            $http({
                method: 'GET',
                url: `${config.apiUrl}api/getallgames`
            }).then(function successCallback(response) {
                $scope.videoGames = angular.fromJson(response.data);
            }, function errorCallback(response) {
                // this function handles error
            });
        }

       

        $scope.onReload = function () {
            $http({
                method: 'GET',
                url: `${config.apiUrl}api/getallgames`
            }).then(function successCallback(response) {
                $scope.videoGames = angular.fromJson(response.data);
                $scope.onReload();
            }, function errorCallback(response) {
                // this function handles error
            });
        }

        $scope.onAddNew = function () {
            var maxGameId = $scope.videoGames[$scope.videoGames.length - 1].p_GameId;
            $scope.videoGames[maxGameId] = { "p_GameId": maxGameId + 1, "p_GameName": "", "p_ReleaseDate": new Date().toISOString(), "p_Ratings": "", "p_ESRBRating": "", "p_Category": 1, "p_Price": "" };
        }

        $scope.onUpdate = function (updatedValue, gameId) {
            //var config = "Content-Type";
            $http.post(`${config.apiUrl}api/postgame/` + gameId, updatedValue)
                .then(function successCallback(response) {
                    alert("Update Success");
                    $scope.onReload();
                }, function errorCallback(response) {
                    // this function handles error
                });
        }

        $scope.onDelete = function (gameId) {
            $http.delete(`${config.apiUrl}api/game/` + gameId)
                .then(function successCallback(response) {
                    $scope.onReload();
                }, function errorCallback(response) {
                    // this function handles error
                });
        }
    }

    return {
        bindings: {},
        controller: componentController,
        controllerAs: '${ctrl}',
        templateUrl: './catalog/edit/edit.html'
    }
}
