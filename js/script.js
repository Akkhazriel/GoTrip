$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});   

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
});

// Go to the next item
$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider__btn--next').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})