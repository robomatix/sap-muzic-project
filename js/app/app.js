(function () {
    'use strict';

    var app = angular.module('sapmuzicproject.app', ['sapmuzicproject.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application sapmuzicproject...');
    };

    function appRun() {
        console.log('Application sapmuzicproject started...');
    };
})();
