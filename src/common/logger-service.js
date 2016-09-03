(function(){
    'use strict';

    angular
        .module('app')
        .factory('loggerService', [loggerService]);

    function loggerService() {
        return {
            log: log
        };

        function log(text) {
            toastr.info(text);
        };
    };
})();
