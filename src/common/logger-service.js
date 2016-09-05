(function(){
    'use strict';

    angular
        .module('app')
        .factory('loggerService', ['config', loggerService]);

    function loggerService(config) {
        return {
            log: log
        };

        function log(text) {
            if (!config.showLogs){
                return;
            }
            toastr.info(text);
        }
    }
})();
