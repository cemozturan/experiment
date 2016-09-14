(function () {
  'use strict';

  var controllerId = 'MainController';

  angular
    .module('app')
    .controller('MainController', ['config', 'loggerService', 'videoService', MainController]);

  function MainController(config, loggerService, videoService) {
    var ctrl = this;

    ctrl.videoUrl = '';
    ctrl.videoMuted = config.videoMutedOnStart;

    ctrl.getNextVideo = getNextVideo;
    ctrl.toggleVideo = toggleVideo;
    ctrl.toggleVideoSound = toggleVideoSound;

    activate();

    function activate() {
        getNextVideo();
        ctrl.showVideo = false;
        loggerService.logDev('Activated ' + controllerId);
    }

    function getNextVideo() {
      ctrl.videoUrl = videoService.getUrlForNextVideo();
      ctrl.showVideo = true;
    }

    function toggleVideo() {
      ctrl.showVideo = !ctrl.showVideo;
      if (!ctrl.showVideo) {
          ctrl.videoMuted = true;
      } else {
          ctrl.videoMuted = false;
      }
      loggerService.logDev(ctrl.showVideo ? 'Video shown' : 'Video hidden');
    }

    function toggleVideoSound() {
      ctrl.videoMuted = !ctrl.videoMuted;
      loggerService.log(ctrl.videoMuted ? 'Video sesi KAPALI' : 'Video sesi AÇIK');
    }
  }
})();
