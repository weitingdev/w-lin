var num = 50;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    }
    else {
        $('.menu').removeClass('fixed');
    }
});