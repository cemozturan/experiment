(function(){
    'use strict';

    angular
        .module('app')
        .factory('loggerService', ['config', loggerService]);

    function loggerService(config) {
        return {
            log: log,
            logDev: logDev
        };

        function logDev(text) {
            if (!config.showDevLogs){
                return;
            }
            toastr.info(text);
        }

        function log(text) {
            toastr.info(text);
        }
    }
})();
