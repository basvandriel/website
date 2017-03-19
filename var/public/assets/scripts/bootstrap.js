/* Fixed navigation */
$(document).on("scroll", function () {
    console.log('scroll top : ' + $(window).scrollTop());

    if ($(window).scrollTop() >= $(".fullscreen-container").height() - 50) {
        $(".navigation-button").show();
    } else {
        $(".navigation-container").removeClass("sticky-navigation");
        $(".navigation-container ul.sub-navigation-bar").hide();
        $(".navigation-button").hide();

    }

    /*    if ($(window).scrollTop() < $(".fullscreen-container").height() - 50) {
     }*/
});

$(document).ready(function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'var/public/assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
    /**
     * Fixed navigation menu
     */
    $(".navigation-button").on("click", function () {
        if ($(this).hasClass("active")) {
            console.log("I;M ACTIVE");
            $(".navigation-container").removeClass("sticky-navigation");
            $(".navigation-container ul.sub-navigation-bar").hide();
            $(this).removeClass("active");
        } else {
            console.log("no");
            $(this).addClass("active");
            $(".navigation-container").addClass("sticky-navigation");
            $(".navigation-container ul.sub-navigation-bar").show();
        }
    });
});
