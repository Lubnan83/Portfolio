
! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if($('.navbar').hasClass('active')){
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });


    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('.section-about').addClass("in");
            $('.overlay-wrap').fadeOut(400);
        } else {
            $('.section-about').removeClass("in");
            $('.overlay-wrap').fadeIn(400);
        }

        if ($(this).scrollTop() > 500 ) {
            $('.navbar').fadeIn(400);
        } else {
            $('.navbar').fadeOut(400);
        }
    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Portolio init

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows : false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
        },
    });

    // Home Banner Init

    var swiper = new Swiper('.swiper-home', {
        spaceBetween: 3,
        effect: 'fade',
        pagination: {
            el: '.home-pagination',
            clickable: true,
        }
    });

    /* ---------------------------------------------- /*
    * Parallax - Init
    /* ---------------------------------------------- */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({'background-attachment': 'scroll'});
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }        
    }

    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
      {
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,       
        live:         true,      
        callback:     function(box) {
        },
        scrollContainer: null,
        resetAnimation: true,
      }
    );
    wow.init();

    /* ---------------------------------------------- /*
    * Youtub Player
    /* ---------------------------------------------- */

    if($('.youtube-bg').length) {
        $(".youtube-bg").mb_YTPlayer();
    }

}(window.jQuery);