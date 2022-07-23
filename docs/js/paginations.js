$(document).ready(function(){
    $('#page-nav a').on('click', function(){
        $('#page-nav a').removeClass('active-page');
        $(this).addClass('active-page');
    });
});
