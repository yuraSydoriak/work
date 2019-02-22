$(document).ready(function () {
    //------------- modal window---------------------------
    $('#goModalLogin').click(function (e) {
        $('.popup-wrap').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.close-btn').click(function (e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
    //------------- end modal window---------------------------

    //--------------------- slider ----------------------------
    $('.main-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000, //delay befor next slide
        prevArrow: $('.arrow.left'),
        nextArrow: $('.arrow.right')
    });
    //------------------ end slider ----------------------------
});