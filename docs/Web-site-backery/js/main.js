$(document).ready(function(){
    $('#carousel1').owlCarousel({
        items:3,
        loop: true,
        nav: true,
        dots: false,
        responsive:{

            320:{
                items:1
            },

            768:{
                items:2
            },

            1200:{
                items:3
            }
        }
    });
});