(function(){
    'use strict';

    angular
    .module('app')
    .directive('muteVideo', [muteVideo]);

    function muteVideo() {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs) {
                element[0].onended = function(){
                    scope.mainCtrl.getNextVideo();
                    scope.$apply();
                };
                scope.$watch('mainCtrl.videoMuted', function(newValue, oldValue) {
                    element[0].muted = newValue
                });
            }
        }
    }
})();
