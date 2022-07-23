$(document).ready(function(){
    $('.backtop').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }
    });
});
