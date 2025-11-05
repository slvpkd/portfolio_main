/*---------------------------------------------
Template name:  Bitqueen
Version:        1.0
Author:         techydevs
Author Email:   kamalacca@gmail.com

[Table of Content]

01: Preloader
02: Search box Trigger
02: Back to Top Button and Navbar Scrolling Effects
03: back to top button click control
04: Counter up js
05: Client logo carousel
06: client-testimonial
07: live cryptocurrency calculator
08: progressbar
09: magnificpopup
10: flipclock
11: FAQ
12: Google map
13: MagnificPopup
14: Schedule Tab Tow
15: Google Map
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    $(document).on('ready', function () {

        /*==== Preloader =====*/
        $(window).on('load', function(){
            $('.loader-container').delay('500').fadeOut(2000);
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul li .icon-arrow', function () {
            $(this).closest('li').siblings().removeClass('active').find('.dropdown-menu-item').slideUp(200);
            $(this).closest('li').toggleClass('active').find('.dropdown-menu-item').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.toggle-bars', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*=========== Anchor links animate ============*/
        $(document).on('click', '.main-menu-content nav>ul>li>a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 10) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('show-back-to-top');
            } else {
                $('#back-to-top').removeClass('show-back-to-top');
            }

            // skillbar
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                },6000);
            });

            // Counter Number
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },

                    {
                        duration: 5000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
            });

        });

       /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== Client logo slider =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: false,
            smartSpeed: 200,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 3
                }
            }
        });

        /*==== client-testimonial slider =====*/
        $('.client-testimonial').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: true
        });


        /*==== magnificpopup video =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*==== Isotope =====*/
        // bind filter button click
        $(document).on( 'click', '.portfolio-filter li', function() {
            var filterData = $( this ).attr('data-filter');

            // use filterFn if matches value
            $('.portfolio-list').isotope({
                filter: filterData,
            });

            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
        });

        // portfolio list
        $('.portfolio-list').isotope({
            itemSelector: '.single-portfolio-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single-portfolio-item',
                horizontalOrder: true
            }
        });

        /*==== Tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();

    });
})(jQuery);

