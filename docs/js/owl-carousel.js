$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        navText: ['', ''],
        loop: true,
        responsivClass: true,
        responsive: {
            320: {
                items:1
            },

            768: {
                items:2
            },

            1200: {
                items:3
            }
        }
        
    });
});