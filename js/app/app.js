(function () {
    'use strict';

    var app = angular.module('sapmuzicproject.app', []);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun() {
        console.log('Application started...');
    };
})();
