/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'var/public/assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

/* Fixed navigation */
$(document).on("scroll", function () {
    console.log('scroll top : ' + $(window).scrollTop());

    if ($(window).scrollTop() >= $(".fullscreen-container").height() - 50) {
        console.log("stickay");
        $(".navigation-container").addClass("sticky-navigation");
    }

    if ($(window).scrollTop() < $(".fullscreen-container").height() - 50) {
        $(".navigation-container").removeClass("sticky-navigation");
    }
});