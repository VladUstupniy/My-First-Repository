$(document).ready(function(){
    $('#mobile-menu-button').click(function(){
        $('.mobile-menu-overlay').slideToggle(1000);
    });

    $('#mobile-menu-button').click(function(){
        $('.mobile-menu-button').toggleClass('mobile-menu-button--active');
    });

    //$('#mobile-menu-button').click(function(){
        //$('body').toggleClass('noscroll');
    //});

    //$('.mobile-menu__list a').click(function(){
        //$('body').toggleClass('noscroll');
    //});
});
