(function() {
  'use strict';

  angular
    .module('app')
    .factory('videoService', [videoService]);

  function videoService() {

    var currentVideoId = 0;
    var videoCount = 3;

    return {
      getUrlForNextVideo: getUrlForNextVideo
    };

    function getUrlForNextVideo() {
      currentVideoId = (currentVideoId % videoCount) + 1;
      return getVideoUrl();
    }

    function getVideoUrl() {
      return './public/media/' + currentVideoId + '.mp4';
    }
  }
})();
