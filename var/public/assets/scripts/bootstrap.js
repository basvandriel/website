/* Fixed navigation */
$(document).on("scroll", function () {
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
    /**
     * Animated scrolls
     */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

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