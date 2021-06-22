(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*--------------------
            wow js init
        --------------------*/
        new WOW().init();

        /*-------------------------------------
            portfolio filter activation
        -------------------------------------*/
        var Container = $('#portfolio-marsonry');
        if (Container.length > 0) {
            Container.imagesLoaded(function () {
                var festivarMasonry = $('#portfolio-marsonry').isotope({
                    itemSelector: '.masonry-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter:0
                    }
                });
                $(document).on('click', '.portfolio-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        /*----------------------------
            portfolio menu active
        ----------------------------*/
        var portfolioMenu = '.portfolio-menu li';
        $(document).on('click', portfolioMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        /*----------------------------------
            magnific popup activation
        ----------------------------------*/
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        /*-------------------------------
            back to top
        ------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*------------------------------
            smoth achor effect
        ------------------------------*/
        $(document).on('click','#primary-menu li a', function (e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0,1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass('active').siblings().removeClass('active');
            }
        });
        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.counter-num');
        counternumber.rCounter({duration: 30});
        /*----------------------------------------
            testimonial carousel
        ----------------------------------------*/
        var $tesitmonialCarousel = $('#testimonial-carousel');
        if ($tesitmonialCarousel.length > 0) {
            $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                animateIn:'flipInX',
                animateOut:'flipOutY',
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    767: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 1,
                        nav: false
                    },
                    960: {
                        items: 1,
                        nav:false
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
        
       
        /*------------------------------
            Typed Activate
        ------------------------------*/
        var $typed = $("#typed");
        if ($typed.length > 0) {
            var text = $typed.data('typedtext');
            new Typewriter('#typed', {
                  strings: text,
                  autoStart: true,
                  loop: true
                });
        }
        /*-----------------------------
        
        -----------------------------*/
        /*------- progressbar activation ----------*/
        var $section = $('#skill');
        if ($section.length >0) {
            $(document).bind('scroll', function (ev) {
                var scrollOffset = $(document).scrollTop();
                var containerOffset = $section.offset().top - window.innerHeight;
                if (scrollOffset > containerOffset) {
                    var progressBarSelector = $('.single-progress-item');
                    $.each(progressBarSelector,function (index, value) {
                        var el = $(this);
                        progressbar(el.attr('id'), el.data('percentage'),{fillColor: el.data('fillcolor'),bgColor: el.data('bgcolor')});
                    });
                    // unbind event not to load scroll again
                    $(document).unbind('scroll');
                }
            });
        }


        function progressbar(selector, percentage,settings) {
            $('#'+selector).LineProgressbar({
                percentage: percentage,
                fillBackgroundColor: settings.fillColor,
                backgroundColor: settings.bgColor,
                duration: 3000
            });
        }
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       
    });
           
    $(window).on('load',function(){
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));	
