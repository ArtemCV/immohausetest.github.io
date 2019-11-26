$(document).ready(function () {

    var optionsSlider = {
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag : false,
        touchDrag : false,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    }
    var owl = $('#main-slaider-id');
    owl.owlCarousel(optionsSlider);

    
    // owl.owlCarousel();
    // Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


});