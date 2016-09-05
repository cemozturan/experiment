(function () {
  'use strict';

  var controllerId = 'MainController';

  angular
    .module('app')
    .controller('MainController', ['loggerService', 'videoService', MainController]);

  function MainController(loggerService, videoService) {
    var ctrl = this;

    ctrl.videoUrl = '';
    ctrl.showVideo = true;

    ctrl.getNextVideo = getNextVideo;
    ctrl.toggleVideo = toggleVideo;

    activate();

    function activate() {
        getNextVideo();
        loggerService.log('Activated ' + controllerId);
    }

    function getNextVideo() {
        ctrl.videoUrl = videoService.getUrlForNextVideo();
        ctrl.showVideo = true;
        loggerService.log('Video change called');
    }

    function toggleVideo() {
      ctrl.showVideo = !ctrl.showVideo;
      loggerService.log('Toggled video');
    }
  }
})();
