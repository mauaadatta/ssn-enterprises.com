$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        numVisible: 2,
        indicators: false,
        padding: 60
    });
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
});
// move next carousel
$('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});