/**
 * Created by robomatix on 06/08/15.
 */

(function () {
    'use strict';

    var controllers = angular.module('sapmuzicproject.controllers');

    controllers.controller('VideoListController', function ($rootScope, $scope) {
        $scope.todoList = [];

        getTodos();

        function getTodos() {
            for (var i = 1; i < 11; i++) {
                $scope.todoList.push({
                    id: i,
                    title: 'Todo ' + i
                });
            }
        };
    });
})();