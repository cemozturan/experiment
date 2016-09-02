! function(t) {
    "use strict";
    t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 60
    }), t("#topNav").affix({
        offset: {
            top: 200
        }
    }), (new WOW).init(), t("a.page-scroll").bind("click", function(a) {
        var e = t(this);
        t("html, body").stop().animate({
            scrollTop: t(e.attr("href")).offset().top - 50 // 50 is how much space is left at the top of the screen when a section is navigated into
        }, 1450, "easeInOutExpo"), a.preventDefault() // 1450 is the ms for the scrolling animation
    }), t(".navbar-collapse ul li a").click(function() {
        t(".navbar-toggle:visible").click()
    }), t("#galleryModal").on("show.bs.modal", function(a) {
        t("#galleryImage").attr("src", t(a.relatedTarget).data("src"))
    })
}(jQuery);
