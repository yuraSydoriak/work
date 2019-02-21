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
    $('').slick({
        rtl: true
    });
    //------------------ end slider ----------------------------
});