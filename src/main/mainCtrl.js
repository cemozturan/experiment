(function () {
  'use strict';

  var controllerId = 'MainController';

  angular
    .module('app')
    .controller('MainController', ['loggerService', MainController]);

  function MainController(loggerService) {
    var ctrl = this;

    ctrl.mainTitle = "Sebastian Schindler";

    activate();

    function activate(){
        loggerService.log('Activated ' + controllerId);
    }

  }
})();
