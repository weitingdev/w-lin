$(document).ready(function() {

    $('.sidenav').sidenav();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //when user scrolls down
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0 //when btn is clicked, scrolls to top
        }, 300); //speed of animation
        return false;
    });

    $('.scrollspy').scrollSpy();

    $(".navbar").click(function() {
        $('html,body').animate({
            scrollTop: heightFromTop},
            'slow');
    });

    M.AutoInit();
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);

});