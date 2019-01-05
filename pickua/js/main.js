$(document).ready(function() {
    $('.mobile-login-btn').click(function () {
        $('.login-form-mobile').slideDown('slow');
        $('#backDrop').show();
    });

    $('.closeModalBtn').click(function () {
        $('.login-form-mobile').slideUp('slow');
        $('#backDrop').hide();
    });
});