/**
 * Created by robomatix rebirth on 06/08/15.
 */
(function () {
    'use strict';

    var controllers = angular.module('sapmuzicproject.controllers', []);

    controllers.controller('SapmuzicprojectController', function ($rootScope, $scope) {
        $scope.title = 'Single Page Application Muzic Project';
    });
})();