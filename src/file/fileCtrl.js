(function () {
  'use strict';

  var controllerId = 'FileController';

  angular
    .module('app')
    .controller('FileController', ['loggerService', 'FileSaver', 'Blob', FileController]);

  function FileController(loggerService, FileSaver, Blob) {
    var ctrl = this;

    ctrl.text = 'HELLO BEBYBI';

    ctrl.download = function(text) {
      var data = new Blob([text], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, 'text.txt');
    };
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
