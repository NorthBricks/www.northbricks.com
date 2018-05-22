$(document).ready(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                target.focus();
                if (target.is(":focus")) {
                  return false;
                }
                target.attr('tabindex', '-1');
                target.focus();
                return false;
            }
        }
    });
    // function filterPath(string) {
    //     return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
    // }

    // var locationPath = filterPath(location.pathname);

    // $('a[href*="#"]:not([href="#"])').each(function () {
    //     var thisPath = filterPath(this.pathname) || locationPath;
    //     var hash = this.hash;
    //     if ($('#' + hash.replace(/#/, '')).length) {
    //         console.log(1);
    //         if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
    //             var $target = $(hash), target = this.hash;
    //             if (target) {
    //                 $(this).click(function (event) {
    //                     event.preventDefault();
    //                     $('html, body').animate({ scrollTop: $target.offset().top }, 1000, function () {
    //                         location.hash = target;
    //                         $target.focus();
    //                         if ($target.is(':focus')) { //checking if the target was focused
    //                             return false;
    //                         }
    //                         $target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
    //                         $target.focus(); //Setting focus
    //                     });
    //                 });
    //             }
    //         }
    //     }
    // });

    $('.owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        items: 1,
        margin: 20,
        responsive: {
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});
