(function () {
  'use strict';

  var controllerId = 'MainController';

  angular
    .module('app')
    .controller('MainController', ['loggerService', MainController]);

  function MainController(loggerService) {
    var ctrl = this;

    ctrl.mainTitle = "Sebastian Schindler";
    ctrl.videoUrl = '';
    ctrl.changeVideo = changeVideo;

    activate();

    function activate(){
        loggerService.log('Activated ' + controllerId);
    }

    function changeVideo(){
        loggerService.log('Video change called');
        ctrl.videoUrl = './public/media/traffic-blurred.mp4';
        //ctrl.videoUrl = './public/media/cem.mp4';
    }
  }
})();
