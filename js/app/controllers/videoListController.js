/**
 * Created by robomatix on 06/08/15.
 */

(function () {
    'use strict';

    var controllers = angular.module('sapmuzicproject.controllers');

    controllers.controller('VideoListController', function ($rootScope, $scope) {
        $scope.videoListId = [90399590, 90413430, 90445673];// Probably will be in a config file later
        $scope.videoList = [];
        getVideos();

        function getVideos() {


            for (var i = 0; i < $scope.videoListId.length; i++) {
                $scope.videoList.push({
                    id: i,
                    videoId: $scope.videoListId[i]
                });

            }


        };
    });
})();