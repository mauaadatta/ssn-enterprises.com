$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        numVisible: 3,
        indicators: false,
        padding: 60
    });
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
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