(function () {
  'use strict';

  var controllerId = 'MainController';

  angular
    .module('app')
    .controller('MainController', [MainController]);

  function MainController() {
    var ctrl = this;

    ctrl.mainTitle = "Sebastian Schindler";
  }
})();
