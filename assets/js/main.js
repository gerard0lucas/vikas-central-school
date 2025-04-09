! function(o) {
    "use strict";
    (new WOW).init();
    setTimeout(function() {
        o("#spinner").length > 0 && o("#spinner").removeClass("show")
    }, 1), o(window).scroll(function() {
        o(this).scrollTop() > 300 ? o(".sticky-top").addClass("shadow-sm").css("top", "0px") : o(".sticky-top").removeClass("shadow-sm").css("top", "-100px")
    }), o(window).scroll(function() {
        o(this).scrollTop() > 300 ? o(".back-to-top").fadeIn("slow") : o(".back-to-top").fadeOut("slow")
    }), o(".back-to-top").click(function() {
        return o("html, body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo"), !1
    }), o(".header-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1500,
        items: 1,
        dots: !0,
        loop: !0,
        nav: !0,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']
    }), o(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        margin: 24,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
}(jQuery);