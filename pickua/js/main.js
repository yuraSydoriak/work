$(document).ready(function () {
    //Global vars:
    var screenWidth = $(window).width();

    // ------------- for scroll document ----------------------
    $(document).scroll(function () {
        //var positionScroll = $(this).scrollTop();
        //console.log(positionScroll);
    });
    // ------------- end for scroll document ------------------

    //------------- modal window-------------------------------
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

    //-------------- sorter product titles ---------------------

    $('.product-title.needs-shorter span').each(function () {
        var fullProdTitle = $(this).text();
        var shortTitle;

        if (fullProdTitle.length > 25) {

            if (screenWidth > 425) {
                shortTitle = fullProdTitle.substring(0, 35) + '...';
                $(this).text(shortTitle);
            } else {
                shortTitle = fullProdTitle.substring(0, 25) + '...';
                $(this).text(shortTitle);
            }

        }
    });
    //------------ end sorter product titles --------------------
});