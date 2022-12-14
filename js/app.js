$(document).ready(function () {
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        dots:false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav:false,
            },
           768:{
                nav:true,
            }
        }
    });
    //PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed:1000,
        autoplayTimeout:5000,
        margin:25,
        dots:false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                items:1,
                nav:false,
                margin:0,
            },
           768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
                dots:true,
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
    })
});
