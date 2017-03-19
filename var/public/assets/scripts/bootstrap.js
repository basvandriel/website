/* Fixed navigation */
$(document).on("scroll", function () {
    console.log('scroll top : ' + $(window).scrollTop());

    if ($(window).scrollTop() >= $(".fullscreen-container").height() - 50) {
        $(".navigation-button").show();
    } else {
        $(".navigation-container").removeClass("sticky-navigation");
        $(".navigation-container ul.sub-navigation-bar").hide();

        $(".navigation-button > i.fa").removeClass("fa-times").addClass('fa-bars');
        $(".navigation-button").removeClass("active");
        $(".navigation-button").hide();
    }
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
            $(".navigation-container").removeClass("sticky-navigation");
            $(".navigation-container ul.sub-navigation-bar").hide();
            $(this).removeClass("active");

            $(this).children("i.fa-times").removeClass("fa-times").addClass("fa-bars");
        } else {
            $(this).addClass("active");
            $(".navigation-container").addClass("sticky-navigation");
            $(".navigation-container ul.sub-navigation-bar").show();

            $(this).children("i.fa-bars").removeClass("fa-bars").addClass("fa-times");
        }
    });
});
