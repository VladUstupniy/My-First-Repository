$(document).ready(function() {
    $('#show-modal').on('click', function(e) {
        e.preventDefault();
        $('.modal-window__wrap').fadeIn();
    });

    $('#close-modal').on('click', function(e){
        e.preventDefault();
        $('.modal-window__wrap').fadeOut();
    });

    $('.modal-window__wrap').on('click', function(e){
        e.preventDefault();
        $('.modal-window__wrap').fadeOut();
    });

    $('.modal-window').on('click', function(e){
        e.stopPropagation();
    });
});