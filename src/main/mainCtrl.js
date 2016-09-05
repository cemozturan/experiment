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
    ctrl.videoMuted = false;

    ctrl.getNextVideo = getNextVideo;
    ctrl.toggleVideo = toggleVideo;
    ctrl.toggleVideoSound = toggleVideoSound;

    activate();

    function activate() {
        getNextVideo();
        loggerService.logDev('Activated ' + controllerId);
    }

    function getNextVideo() {
        ctrl.videoUrl = videoService.getUrlForNextVideo();
        ctrl.showVideo = true;
    }

    function toggleVideo() {
      ctrl.showVideo = !ctrl.showVideo;
      loggerService.logDev('Toggled video');
    }

    function toggleVideoSound() {
      ctrl.videoMuted = !ctrl.videoMuted;
      loggerService.log(ctrl.videoMuted ? 'Video sound OFF' : 'Video sound ON');
    }
  }
})();
