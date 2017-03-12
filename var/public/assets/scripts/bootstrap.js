/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'var/public/assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

/* Fixed navigation */
$(document).on("scroll", function () {
    console.log('scroll top : ' + $(window).scrollTop());

    if ($(window).scrollTop() >= $(".fullscreen-container").height() - 50) {
        $(".navigation-container").addClass("sticky-navigation");

        /*        $(".navigation-container ul.navigation-bar li a[href=\"#about-me-content-container\"").parent().append(
         "<li>Skills<li>"
         );*/
    } else {
        $(".navigation-container").removeClass("sticky-navigation");
    }

/*    if ($(window).scrollTop() < $(".fullscreen-container").height() - 50) {
    }*/
});