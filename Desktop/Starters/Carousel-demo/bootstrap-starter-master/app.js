$(document).ready(function() {

    var sync1 = $("#sync1");
    sync1.owlCarousel({
        items: 3,
        slideSpeed: 0.5,
        nav: true,
        margin: 20,
        autoplay: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
        }
    });
});