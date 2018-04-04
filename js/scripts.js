$(document).ready(function() {

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

});