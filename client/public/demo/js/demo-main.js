$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);


    //-------- Active Sticky Js ----------//
    $(".default-header").sticky({ topSpacing: 0 });

});

/* -------------------------------------------------------------------
        Header Scroll Class js
     ------------------------------------------------------------------ */

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    } else {
        $('#header').removeClass('header-scrolled');
    }
});


/* -------------------------------------------------------------------
    Smooth Scroll js
 ------------------------------------------------------------------ */
$('.nav-menu li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top //no need of parseInt here
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});


//------- Filter  js --------//  

// Multiple Page
$(window).on('load', function () {
    $('.multiple-filter ul li').on('click', function () {
        $('.multiple-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $multipleGrid.isotope({
            filter: data
        })
    });

    if (document.getElementById("multiplePortfolio")) {
        var $multipleGrid = $(".multiple-grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        })
    };
});


// Landing Page
$(window).on('load', function () {
    $('.landing-filter ul li').on('click', function () {
        $('.landing-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $landingGrid.isotope({
            filter: data
        })
    });

    if (document.getElementById("landingPortfolio")) {
        var $landingGrid = $(".landing-grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        })
    };
});

// Blog Page
$(window).on('load', function () {
    $('.blog-filter ul li').on('click', function () {
        $('.blog-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $blogGrid.isotope({
            filter: data
        })
    });

    if (document.getElementById("blogPortfolio")) {
        var $blogGrid = $(".blog-grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        })
    };
});

