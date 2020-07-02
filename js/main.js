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
    $('.fixed-action-btn').floatingActionButton();
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

$(".collapsible-header").hover(function () {
    $(".collapsible-header").addClass("active");
    $(".collapsible-body").css('display', 'block');
});

$(".collapsible-header").mouseout(function () {
    $(".collapsible-header").removeClass("active");
    $(".collapsible-body").css('display', 'none');
});