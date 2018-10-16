// import anime from 'animejs'

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

    //Animation by TobiasAhlin.com
    $('.ml16').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    anime.timeline({loop: false})
    .add({
        targets: '.ml16 .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 2400,
        delay: function(el, i) {
          return 30 * i;
        }
    })

    AOS.init();

});