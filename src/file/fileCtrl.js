(function () {
  'use strict';

  var controllerId = 'FileController';

  angular
    .module('app')
    .controller('FileController', ['loggerService', FileController]);

  function FileController(loggerService) {
    var ctrl = this;

    ctrl.text = 'HELLO BEBYBI';
  }
})();


/*
The below fails with "FileController is not a funciton, got undefined" error because of the way
we declare the FileController function. Due to JS hoisting, the FileController is undefined at the point it gets registered with
the Angular app.

(function () {
  'use strict';

  var controllerId = 'FileController';

  angular
    .module('app')
    .controller('FileController', ['loggerService', FileController]);

  var FileController = function(loggerService) {
    var ctrl = this;

    ctrl.text = 'Hello world';
  };
})();*/
