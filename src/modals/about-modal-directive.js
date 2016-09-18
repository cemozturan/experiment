(function(){
    'use strict';

    angular
        .module('app')
        .directive('aboutModalDirective', [aboutModalDirective]);

    function aboutModalDirective() {

        return {
            template:
            '<div id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    	'<div class="modal-body">' +
                    		'<h2 class="text-center">Gizem Funda için</h2>' +
                    		'<h5 class="text-center">' +
                    		    'Sayfanın küçük bir özetini buraya ekledim, neler var, ne tavsiye ederim, vs...' +
                    		'</h5>' +
                    		'<p class="text-justify">' +
                    		    'The birthday letter will go here.' +
                        		'This should, in theory, look good even if there are ' +
                            	'multiple lines of text. ' +
                                'The whole page looks better when in full screen mode (press F11).' +
                    		'</p>' +
                    		'<p class="text-center"><a href="http://gfsivri.azurewebsites.net/" target="ext">İnternetteki versiyonu aç</a></p>' +
                    		'<br/>' +
                    		'<button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true"> Tamam </button>' +
                    	'</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        };
    }
})();
