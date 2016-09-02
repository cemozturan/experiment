(function(){
  'use strict';

  angular
    .module('app')
    .directive('photoDirective', [photoDirective]);

  function photoDirective() {
    var controller = ['$scope', function($scope){
      $scope.url = './public/media/' + $scope.id + '.jpg';
    }];

    var template =
              '<div class="col-lg-4 col-sm-6">' +
                '<a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="{{url}}">' +
                '<img ng-src="{{url}}" class="img-responsive" alt="Image 1">' +
                '<div class="gallery-box-caption">' +
                  '<div class="gallery-box-content">' +
                    '<div>' +
                      '<i class="icon-lg ion-ios-search"></i>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '</a>' +
              '</div>';

    return {
      restrict: 'E',
      scope: {
        id: '@id'
      },
      controller: controller,
      template: template
    };
  }

})();
