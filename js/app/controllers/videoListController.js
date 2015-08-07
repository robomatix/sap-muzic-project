/**
 * Created by robomatix on 06/08/15.
 */

(function () {
    'use strict';

    var controllers = angular.module('sapmuzicproject.controllers');

    controllers.controller('VideoListController', function ($rootScope, $scope,videoListId,baseJsonVideoUrl) {
        $scope.baseJsonVideoUrl=baseJsonVideoUrl;
        $scope.videoListId = videoListId;// From js/app/config/app.config.js
        $scope.videoList = [];
        getVideos();

        function getVideos() {


            for (var i = 0; i < $scope.videoListId.length; i++) {
                $scope.videoList.push({
                    id: i,
                    jsonVideoUrl: $scope.baseJsonVideoUrl+$scope.videoListId[i]
                });

            }


        };
    });
})();