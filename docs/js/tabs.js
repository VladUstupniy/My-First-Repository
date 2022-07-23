$(document).ready(function(){
    /* TABS - кастомные табы на jQuery */
    // Скрываем все контейнеры кроме превого
    $('#tabs-sections .sections__tab:not(:first)').hide();

    //Обработчик на навигацию
    $('#tabs-nav li').click(function(event){
        event.preventDefault();
        $('#tabs-sections .sections__tab').hide();
        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');

        //Активный таб по умолчанию имеет класс current

        var clicked = $(this).find('a:first').attr('href');
        $('#tabs-sections ' + clicked).fadeIn();
    }).eq(0).addClass('current');
});