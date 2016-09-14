(function(){
    'use strict';

    angular
        .module('app')
        .factory('loggerService', ['config', loggerService]);

    function loggerService(config) {
        return {
            log: log,
            logDev: logDev,
            logWarning: logWarning,
            logSuccess: logSuccess
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

        function logWarning(text, title) {
            toastr.warning(text, title);
        }

        function logSuccess(text, title) {
            toastr.success(text, title);
        }
    }
})();
