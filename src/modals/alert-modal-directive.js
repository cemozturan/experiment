(function(){
    'use strict';

    angular
        .module('app')
        .directive('alertModalDirective', [alertModalDirective]);

    function alertModalDirective() {

        return {
            template:
            '<div id="alertModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                '<div class="modal-dialog modal-sm">' +
                    '<div class="modal-content">' +
                	   '<div class="modal-body">' +
                            '<h2 class="text-center">Good Job!</h2>' +
                		    '<p class="text-center">You clicked the button, but it does not actually go anywhere because this is only a demo.</p>' +
                		    '<br/>' +
                		    '<button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true">OK <i class="ion-android-close"></i></button>' +
                	    '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        };
    }
})();
