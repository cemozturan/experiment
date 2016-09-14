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
                    		    'This is a single-page Bootstrap template with a sleek dark/grey color scheme, accent color and smooth scrolling.' +
                    		    'There are vertical content sections with subtle animations that are activated when scrolled into view using the jQuery WOW plugin. There is also a gallery with modals' +
                    		    'that work nicely to showcase your work portfolio. Other features include a contact form, email subscribe form, multi-column footer. Uses Questrial Google Font and Ionicons.' +
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
