/*
 Theme Name: houzez
 Description: houzez
 Author: Favethemes
 Version: 1.0
 */
(function($) {
    "use strict";

    /* ------------------------------------------------------------------------ */
    /*  global variables
    /* ------------------------------------------------------------------------ */
    var $win = $(window);
    var header_area = $('.header-main-wrap');
    var header_area_height = header_area.innerHeight();

    /* ------------------------------------------------------------------------ */
    /* tooltip
    /* ------------------------------------------------------------------------ */
    $('[data-toggle="tooltip"]').tooltip()

    /* ------------------------------------------------------------------------ */
    /* prevent advanced search dropdowns from closing on clicks
    /* ------------------------------------------------------------------------ */
    $('.advanced-search-dropdown').click(function(e) {
        e.stopPropagation();
    });

    /* ------------------------------------------------------------------------ */
    /* agent phone number
    /* ------------------------------------------------------------------------ */
    $('.agent-phone').click(function(e) {
        $(this).toggleClass('agent-phone-hidden');
    });
    /* ------------------------------------------------------------------------ */
    /*  drop down menus
    /* ------------------------------------------------------------------------ */
    // if ($(window).width() <= 767) {
    //     $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    //         var $el = $(this);
    //         $el.toggleClass('active-dropdown');
    //         var $parent = $(this).offsetParent(".dropdown-menu");
    //         if (!$(this).next().hasClass('show')) {
    //             $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    //         }
    //         var $subMenu = $(this).next(".dropdown-menu");
    //         $subMenu.toggleClass('show');

    //         $(this).parent("li").toggleClass('show');

    //         $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    //             $('.dropdown-menu .show').removeClass("show");
    //             $el.removeClass('active-dropdown');
    //         });

    //         if (!$parent.parent().hasClass('navbar-nav')) {
    //             $el.next().css({
    //                 "top": $el[0].offsetTop,
    //                 "left": $parent.outerWidth()
    //             });
    //         }
    //         return false;
    //     });
    // } else {
    //     //do nothing
    // };

    $('.dropdown-menu span.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass('show');
        });


        return false;
    });

    /* ------------------------------------------------------------------------ */
    /*  avoid zoom when double click on mobile devices
    /* ------------------------------------------------------------------------ */
    $.fn.nodoubletapzoom = function() {
        $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp,
                t1 = $(this).data('lastTouch') || t2,
                dt = t2 - t1,
                fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) return;

            e.preventDefault();
            $(this).trigger('click').trigger('click');
        });
    };

    /* ------------------------------------------------------------------------ */
    /*  mobile menu
    /* ------------------------------------------------------------------------ */
    // var slideout_left = new Slideout({
    //     'panel': document.getElementById('main-wrap'),
    //     'menu': document.getElementById('nav-mobile'),
    //     'padding': 256,
    //     'tolerance': 70,
    //     'side': 'left',
    //     'easing': 'cubic-bezier(.32,2,.55,.27)'
    // });
    // var slideout_right = new Slideout({
    //     'panel': document.getElementById('main-wrap'),
    //     'menu': document.getElementById('navi-user'),
    //     'padding': 256,
    //     'tolerance': 70,
    //     'side': 'right',
    //     'easing': 'cubic-bezier(.32,2,.55,.27)'
    // });

    // // disable touch
    // slideout_left.disableTouch();
    // slideout_right.disableTouch();

    // // Toggle button
    // $('.toggle-button-left').on('click', function() {
    //     slideout_left.toggle();
    //     $('.slideout-menu-left').toggleClass('open');
    // });
    // $('.toggle-button-right').on('click', function() {
    //     slideout_right.toggle();
    //     $('.slideout-menu-right').toggleClass('open');
    // });

    /* ------------------------------------------------------------------------ */
    /*  search price slider
    /* ------------------------------------------------------------------------ */
    var addCommas = function(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
    if ($(".price-range").length > 0) {
        $(".price-range").slider({
            range: true,
            min: 100000,
            max: 5000000,
            values: [100000, 5000000],
            slide: function(event, ui) {
                $(".min-price-range-hidden").val("$" + addCommas(ui.values[0]));
                $(".max-price-range-hidden").val("$" + addCommas(ui.values[1]));

                $(".min-price-range").text("$" + addCommas(ui.values[0]));
                $(".max-price-range").text("$" + addCommas(ui.values[1]));
            }
        });
        $(".min-price-range-hidden").val("$" + addCommas($(".price-range").slider("values", 0)));
        $(".max-price-range-hidden").val("$" + addCommas($(".price-range").slider("values", 1)));
        $(".min-price-range").text("$" + addCommas($(".price-range").slider("values", 0)));
        $(".max-price-range").text("$" + addCommas($(".price-range").slider("values", 1)));
    }
    /* ------------------------------------------------------------------------ */
    /*  area size slider
    /* ------------------------------------------------------------------------ */
    var addCommas = function(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
    if ($(".area-range").length > 0) {
        $(".area-range").slider({
            range: true,
            min: 100,
            max: 3000,
            values: [100, 3000],
            slide: function(event, ui) {
                $(".min-area-range-hidden").val(addCommas(ui.values[0]) + " Sq Ft");
                $(".max-area-range-hidden").val(addCommas(ui.values[1]) + " Sq Ft");

                $(".min-area-range").text(addCommas(ui.values[0]) + " Sq Ft");
                $(".max-area-range").text(addCommas(ui.values[1]) + " Sq Ft");
            }
        });
        $(".min-area-range-hidden").val(addCommas($(".area-range").slider("values", 0)) + " Sq Ft");
        $(".max-area-range-hidden").val(addCommas($(".area-range").slider("values", 1)) + " Sq Ft");
        $(".min-area-range").text(addCommas($(".area-range").slider("values", 0)) + " Sq Ft");
        $(".max-area-range").text(addCommas($(".area-range").slider("values", 1)) + " Sq Ft");
    }

    /* ------------------------------------------------------------------------ */
    /*  search distance slider
    /* ------------------------------------------------------------------------ */
    $(function() {
        $(".distance-range").slider();
    });
    /* ------------------------------------------------------------------------ */
    /*  parallax
    /* ------------------------------------------------------------------------ */
    $('.parallax').parallaxBackground({
        parallaxBgPosition: "center center",
        parallaxBgRepeat: "no-repeat",
        parallaxBgSize: "cover",
        parallaxSpeed: "0.25",
    });

    /* ------------------------------------------------------------------------ */
    /* mobile search form overlay
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        //v1,2
        $(".mobile-search-trigger").click(function() {
            $("#overlay-search-advanced-module").toggleClass("open");
        });

        $(".overlay-search-module-close").click(function() {
            $("#overlay-search-advanced-module").toggleClass("open");
        });

        //v3
        $(".mobile-search-trigger-v3").click(function() {
            $("#overlay-search-advanced-module-v3").toggleClass("open");
        });

        $(".overlay-search-module-close").click(function() {
            $("#overlay-search-advanced-module-v3").toggleClass("open");
        });

        $(".mobile-agent-search-trigger").click(function() {
            $("#overlay-agent-search-module").toggleClass("open");
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  search v3
    /* ------------------------------------------------------------------------ */

    $('.advanced-search-v3 .btn-group').click(function(e) {
        if ($('.overlay-wrap').hasClass("show")) {
            // do nothing
        } else {
            $('.overlay-wrap').toggleClass("show");
        }
    });
    // $('.advanced-search-v3 .btn-apply').click(function (e) {
    //     if ($('.overlay-wrap').hasClass("show")) {
    //         $('.overlay-wrap').removeClass("show");    
    //     } else {
    //         // do nothing
    //     }
    // });
    $('.overlay-wrap').click(function(e) {
        $('.overlay-wrap').toggleClass("show");
    });

    /* ------------------------------------------------------------------------ */
    /*  half map elements size
    /* ------------------------------------------------------------------------ */
    function setSectionHeight() {
        var window_height = $(window).innerHeight();
        var sections_height = window_height - header_area_height;

        if ($(window).width() >= 767) {
            $('.half-map-left-wrap, .half-map-right-wrap').css('height', sections_height);
        } else {
            $('.map-on-right .half-map-right-wrap').css('height', sections_height);
            $('.map-on-right .half-map-left-wrap').css('height', sections_height);
            $('.map-on-left .half-map-right-wrap').css('height', sections_height);
            $('.map-on-left .half-map-left-wrap').css('height', sections_height);
        }
    }
    setSectionHeight();
    $win.on('resize', function() {
        setSectionHeight();
    });

    /* ------------------------------------------------------------------------ */
    /*  autocomplete result position
    /* ------------------------------------------------------------------------ */
    function setAutoCompleteResultPosition() {
        var parallax_banner_inner_height = $('.top-banner-wrap').innerHeight();
        var banner_caption_inner_height = $('.banner-caption').innerHeight();
        var autocomplete_search_position = (parallax_banner_inner_height - (parallax_banner_inner_height - banner_caption_inner_height) / 2);

        $('.auto-complete').css('top', autocomplete_search_position);
    }
    setAutoCompleteResultPosition();
    $win.on('resize', function() {
        setAutoCompleteResultPosition();
    });

    /* ------------------------------------------------------------------------ */
    /*  listing switch view
    /* ------------------------------------------------------------------------ */
    $('.switch-btn').on("click", function() {
        $('.switch-btn').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('btn-list')) {
            $('.listing-view').removeClass('grid-view').addClass('list-view');
        } else if ($(this).hasClass('btn-grid')) {
            $('.listing-view').removeClass('list-view').addClass('grid-view');
        }
    });
    /* ------------------------------------------------------------------------ */
    /* compare properties
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.show-compare-panel').click(function() {
            $(this).toggleClass('active');
            $('.compare-property-active').addClass('compare-property-active-push-toleft');
            $('#compare-property-panel').addClass('compare-property-panel-open');
            //disableOther( 'show-compare-panel' );
        });
        $('.close-compare-panel').click(function() {
            $(this).toggleClass('active');
            $('.compare-property-active').removeClass('compare-property-active-push-toleft');
            $('#compare-property-panel').removeClass('compare-property-panel-open');
            //disableOther( 'show-compare-panel' );
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  property slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-slider').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true
        });
    });

    $(document).ready(function() {
        $('.listing-slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.listing-slider-nav'
        });
        $('.listing-slider-nav').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 9,
            slidesToScroll: 1,
            asNavFor: '.listing-slider',
            dots: false,
            focusOnSelect: true,
            variableWidth: true,
            arrows: false
        });
    });

    $(document).ready(function() {
        $('.lightbox-slider').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            //responsive: true,
        });
    });

    $(document).ready(function() {
        $('.listing-slider-variable-width').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            adaptiveHeight: true
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  splash page slider 
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.splash-slider-wrap').slick({
            lazyLoad: 'ondemand',
            adaptiveHeight: true,
            autoplay: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  half maps listing layout 
    /* ------------------------------------------------------------------------ */
    // function homy_half_map_switch_listing_layout() {
    //     if ($(window).width() < 1200) {
    //         $('.half-map-wrap .listing-view').removeClass('list-view').addClass('grid-view');
    //     } else if ($(window).width() > 1200) {
    //         $('.half-map-wrap .listing-view').removeClass('grid-view').addClass('list-view');
    //     }
    // }
    // homy_half_map_switch_listing_layout();
    // $win.on('resize', function() {
    //     homy_half_map_switch_listing_layout();
    // });
    // $win.bind('load', function() {
    //     homy_half_map_switch_listing_layout();
    // });

    /* ------------------------------------------------------------------------ */
    /*  property lightbox
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.btn-expand').click(function() {
            $('.lightbox-gallery-wrap').toggleClass("lightbox-gallery-full-wrap");
            $('.lightbox-slider').slick('refresh');
        });
        $('.btn-email').click(function() {
            $('.lightbox-form-wrap').toggleClass("lightbox-form-wrap-show");
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  property lightbox v2 and v3
    /* ------------------------------------------------------------------------ */
    // $(document).ready(function() {
    //     $('.property-lightbox-v2-sections-navigation, .property-lightbox-v3-sections-navigation').slick({
    //         infinite: true,
    //         speed: 300,
    //         slidesToShow: 1,
    //         centerMode: true,
    //         variableWidth: true
    //     });
    // });
    
    // $( ".property-lightbox-v2-sections-navigation .nav-link" ).on( "click", function( event ) {
    //   event.preventDefault();
    // });

    $(document).ready(function() {
        $('.property-lightbox-v2-carousel').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true
        });
    });
    $('.property-lightbox-v2-sections-navigation a, .property-lightbox-v3-sections-navigation a').click(function() {
        $('.property-lightbox-v2-sections-navigation a, .property-lightbox-v3-sections-navigation a').removeClass("current-section");
        $(this).toggleClass("current-section");
    });

    $(document).ready(function() {
        var $menu = $('.property-lightbox-v3-sections-navigation-wrap');
        var $contentWrap = $('.property-lightbox-v3-content');

        // Aggiungi la classe hidden inizialmente
        $menu.addClass('navigation-wrap-hidden');

        $contentWrap.on('scroll', function() {
            if ($contentWrap.scrollTop() > 0) {
                $menu.removeClass('navigation-wrap-hidden').addClass('navigation-wrap-visible');
            } else {
                $menu.removeClass('navigation-wrap-visible').addClass('navigation-wrap-hidden');
            }
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  property lightbox v2 expand
    /* ------------------------------------------------------------------------ */
    $(document).ready(function(){
        $('.item-tool-expand').click(function(){
            $('.property-lightbox-v2 .property-lightbox-v2-gallery').toggleClass('open');
            $('.property-lightbox-v2-content').toggleClass('hidden');
        });
    });
    

    /* ------------------------------------------------------------------------ */
    /*  property navigation
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.property-navigation-wrap').fadeIn();
            } else {
                $('.property-navigation-wrap').fadeOut();
            }
        });

        $("a.target").click(function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 84
            }, 500, 'easeOutExpo');
        });
    });
    $(window).on('scroll', function() {
        $('.property-section-wrap').each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - 86) {
                var id = $(this).attr('id');
                $('.target').removeClass('active');
                $('.target[href="#' + id + '"]').addClass('active');
            } else if ($(window).scrollTop() <= 0) {
                $('.target').removeClass('active');
            }
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  availability calendar cells height
    /* ------------------------------------------------------------------------ */
    function setCalendarCellHeight() {
        var calendarCellWidth = $('.block-availability-calendars .search-calendar li').innerWidth();
        $('.block-availability-calendars .search-calendar li').css('height', calendarCellWidth);
        $('.block-availability-calendars .search-calendar li').css('line-height', calendarCellWidth + 'px');
    }
    setCalendarCellHeight();
    $win.on('resize', function() {
        setCalendarCellHeight();
    });

    /* ------------------------------------------------------------------------ */
    /*  testimonial slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.testimonials-slider-wrap-v1').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.testimonials-module-slider-v1',
            prevArrow: '<button type="button" class="slick-prev btn-primary-outlined">Prev</button>',
            nextArrow: '<button type="button" class="slick-next btn-primary-outlined">Next</button>',
        });
    });

    $(document).ready(function() {
        $('.testimonials-slider-wrap-v2').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.testimonials-module-slider-v2',
            prevArrow: '<button type="button" class="slick-prev btn-primary-outlined">Prev</button>',
            nextArrow: '<button type="button" class="slick-next btn-primary-outlined">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(document).ready(function() {
        $('.testimonials-slider-wrap-v3').slick({
            lazyLoad: 'ondemand',
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.testimonials-module-slider-v3',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  agents slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.agents-slider-wrap').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.agents-module-slider',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  partners slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.partners-slider-wrap').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.partners-module-slider',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  blog posts slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.blog-posts-slider-wrap').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.blog-posts-slider',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  property carousel v2
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v2').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v2',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  property carousel v2 - 1 col
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v1-1cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v1-1cols',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  property carousel v2 - 2 col
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v1-2cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v1-2cols',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  property carousel v2 - 3 col
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v1-3cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v1-3cols',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  property carousel v2 - 4 col
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v1-4cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v1-4cols',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  property carousel v2 - 5 col
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.property-carousel-wrap-v1-5cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.property-carousel-module-v1-5cols',
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  featured property widget
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.widget-featured-property-slider').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.widget-featured-property-slider-wrap',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  taxonomy cards slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.taxonomy-cards-module.taxonomy-cards-module-3cols .taxonomy-cards-module-slider').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-cards-module-slider-nav',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    $(document).ready(function() {
        $('.taxonomy-cards-module.taxonomy-cards-module-4cols .taxonomy-cards-module-slider').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-cards-module-slider-nav',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  taxonomy grid v2 slider
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-2cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-2cols',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(document).ready(function() {
        $('.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-3cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-3cols',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(document).ready(function() {
        $('.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-4cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-4cols',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(document).ready(function() {
        $('.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-5cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-5cols',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(document).ready(function() {
        $('.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-6cols').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.taxonomy-grids-module-v5-slider.taxonomy-grids-module-v5-6cols',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  instagram widget
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.instagram-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.widget-instagram-slider',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    /* ------------------------------------------------------------------------ */
    /*  instagram widget
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.tweet-slider').slick({
            autoplay: true,
            autoplaySpeed: 52000,
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true,
            dots: true,
            appendArrows: '.twitter-widget-slider',
            prevArrow: '<button type="button" class="slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
        });
    });

    

    /* ------------------------------------------------------------------------ */
    /* login and register links
    /* ------------------------------------------------------------------------ */
    $('.login-link a').click(function() {
        $('.modal-toggle-1').addClass("active");
        $('.modal-toggle-2').removeClass("active");
        $('.register-form-tab').removeClass("active").removeClass("show");
        $('.login-form-tab').addClass("active").addClass("show");
    });
    $('.register-link a').click(function() {
        $('.modal-toggle-2').addClass("active");
        $('.modal-toggle-1').removeClass("active");
        $('.register-form-tab').addClass("active").addClass("show");
        $('.login-form-tab').removeClass("active").removeClass("show");
    });
    /* ------------------------------------------------------------------------ */
    /* datepicker
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.datepicker').datepicker({
            orientation: "bottom left",
            format: 'MM dd, yyyy',
        });
    });
    /* ------------------------------------------------------------------------ */
    /* custom scroll bars
    /* ------------------------------------------------------------------------ */
    var isMobile = /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase());
    if (isMobile) {
        //console.log('You are using a mobile device!');
    } else {
        $(function() {
            $('.deals-table-wrap').overlayScrollbars({
                overflowBehavior: {
                    x: "scroll",
                    y: "scroll"
                },
            });
        });
    }

    /* ------------------------------------------------------------------------ */
    /* dashboard slide panel
    /* ------------------------------------------------------------------------ */
    $('.open-close-slide-panel').click(function(e) {
        $('.dashboard-slide-panel-wrap').toggleClass('dashboard-slide-panel-wrap-visible');
        $('.main-wrap').toggleClass('opacity-02');
    });

    /* ------------------------------------------------------------------------ */
    /*  sticky search bar
    /* ------------------------------------------------------------------------ */
    var stickySidebarTop = 0;
    var listing_nav_area_height = $('.property-navigation-wrap').innerHeight();
    $(document).ready(function() {
        $('.houzez_sticky').theiaStickySidebar({
            //additionalMarginTop: stickySidebarTop + listing_nav_area_height,
            additionalMarginTop: 30,
            minWidth: 768,
            updateSidebarHeight: false
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  Bounce animation
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.review-like-button').click(function(e) {
            $(this).addClass('bounce');
            $('.review-dislike-button').removeClass('bounce');
        });
        $('.review-dislike-button').click(function(e) {
            $(this).addClass('bounce');
            $('.review-like-button').removeClass('bounce');
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  Ajax btn
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {
        $('.ajax-btn').click(function(e) {
            $('.ajax-btn .btn-loader').css('display', 'inline-block');
        });
    });

    /* ------------------------------------------------------------------------ */
    /*  form autofill off
    /* ------------------------------------------------------------------------ */
    $(document).ready(function() {

    });

    /* ------------------------------------------------------------------------ */
    /*  Schedule tour v2
    /* ------------------------------------------------------------------------ */

    $('.tour-day-form-slide-arrow.next').click(function(e) {
        $('.property-schedule-tour-day-form-slide').addClass("end");
        $('.property-schedule-tour-day-form-slide').removeClass("start");
    });
    $('.tour-day-form-slide-arrow.prev').click(function(e) {
        $('.property-schedule-tour-day-form-slide').addClass("start");
        $('.property-schedule-tour-day-form-slide').removeClass("end");
    });

    /* ------------------------------------------------------------------------ */
    /* masonry blog
    /* ------------------------------------------------------------------------ */

    /**
     * Set appropriate spanning to any masonry item
     *
     * Get different properties we already set for the masonry, calculate 
     * height or spanning for any cell of the masonry grid based on its 
     * content-wrapper's height, the (row) gap of the grid, and the size 
     * of the implicit row tracks.
     *
     * @param item Object A brick/tile/cell inside the masonry
     */
    function resizeMasonryItem(item) {
        /* Get the grid object, its row-gap, and the size of its implicit rows */
        var grid = document.getElementsByClassName('masonry')[0],
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

        /*
         * Spanning for any brick = S
         * Grid's row-gap = G
         * Size of grid's implicitly create row-track = R
         * Height of item content = H
         * Net height of the item = H1 = H + G
         * Net height of the implicit row-track = T = G + R
         * S = H1 / T
         */
        var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

        /* Set the spanning as calculated above (S) */
        item.style.gridRowEnd = 'span ' + rowSpan;
    }

    /**
     * Apply spanning to all the masonry items
     *
     * Loop through all the items and apply the spanning to them using 
     * `resizeMasonryItem()` function.
     *
     * @uses resizeMasonryItem
     */
    function resizeAllMasonryItems() {
        // Get all item class objects in one list
        var allItems = document.getElementsByClassName('masonry-brick');

        /*
         * Loop through the above list and execute the spanning function to
         * each list-item (i.e. each masonry item)
         */
        for (var i = 0; i > allItems.length; i++) {
            resizeMasonryItem(allItems[i]);
        }
    }

    /**
     * Resize the items when all the images inside the masonry grid 
     * finish loading. This will ensure that all the content inside our
     * masonry items is visible.
     *
     * @uses ImagesLoaded
     * @uses resizeMasonryItem
     */
    function waitForImages() {
        var allItems = document.getElementsByClassName('masonry-brick');
        for (var i = 0; i < allItems.length; i++) {
            imagesLoaded(allItems[i], function(instance) {
                var item = instance.elements[0];
                resizeMasonryItem(item);
            });
        }
    }

    /* Resize all the grid items on the load and resize events */
    var masonryEvents = ['load', 'resize'];
    masonryEvents.forEach(function(event) {
        window.addEventListener(event, resizeAllMasonryItems);
    });

    /* Do a resize once more when all the images finish loading */
    waitForImages();

    function calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears) {
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const numberOfMonths = loanTermInYears * 12;

        if (monthlyInterestRate === 0) {
            return principal / numberOfMonths;
        }

        return principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfMonths)) / (Math.pow((1 + monthlyInterestRate), numberOfMonths) - 1);
    }

    function updateResults() {
        const homePrice = parseFloat($('#homePrice').val()) || 0;
        const downPaymentPercentage = parseFloat($('#downPaymentPercentage').val()) || 0;
        const annualInterestRate = parseFloat($('#annualInterestRate').val()) || 0;
        const loanTermInYears = parseFloat($('#loanTermInYears').val()) || 0;
        const annualPropertyTaxRate = parseFloat($('#annualPropertyTaxRate').val()) || 0;
        const annualHomeInsurance = parseFloat($('#annualHomeInsurance').val()) || 0;
        const monthlyHOAFees = parseFloat($('#monthlyHOAFees').val()) || 0;
        const pmi = parseFloat($('#pmi').val()) || 0;

        const downPayment = homePrice * (downPaymentPercentage / 100);
        const principal = homePrice - downPayment;
        const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears);
        const monthlyPropertyTax = (homePrice * (annualPropertyTaxRate / 100)) / 12;
        const monthlyHomeInsurance = annualHomeInsurance / 12;

        const pmiRequired = (downPayment / homePrice) < 0.2;

        const monthlyPMI = pmiRequired ? (principal * (pmi / 100)) / 12 : 0;

        const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyHomeInsurance + monthlyHOAFees + monthlyPMI;

        const resultsElement = $('#results');
        resultsElement.html(`
        <div class="mortgage-calculator-data flex-fill">
            <ul class="list-unstyled">
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle dp-icon"></span> Down Payment: <span>$${downPayment.toFixed(2)}</span>
                </li>
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle la-icon"></span> Loan Amount: <span>$${principal.toFixed(2)}</span>
                </li>
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle mmp-icon"></span> Monthly Mortgage Payment: <span>$${monthlyPayment.toFixed(2)}</span>
                </li>
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle mpt-icon"></span> Property Tax: <span>$${monthlyPropertyTax.toFixed(2)}</span>
                </li>
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle mhi-icon"></span> Monthly Home Insurance: <span>$${monthlyHomeInsurance.toFixed(2)}</span>
                </li>
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle mhf-icon"></span> Monthly HOA Fees: <span>$${monthlyHOAFees.toFixed(2)}</span>
                </li>
                ${pmiRequired ? `
                <li class="mortgage-calculator-data">
                    <span class="list-icon-circle mpmi-icon"></span> Monthly PMI: <span>$${monthlyPMI.toFixed(2)}</span>
                </li>
                ` : ''}
                 <li class="mortgage-calculator-data">
                    <span class="list-icon-circle tmp-icon"></span> <strong>Total Monthly Payment:</stromg> <span>$${totalMonthlyPayment.toFixed(2)}</span>
                </li>
            </ul>
        </div>
    `);

        const chartData = [{
                label: 'Monthly Mortgage Payment',
                value: monthlyPayment,
                color: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Property Tax',
                value: monthlyPropertyTax,
                color: 'rgba(54, 162, 235, 0.5)'
            },
            {
                label: 'Home Insurance',
                value: monthlyHomeInsurance,
                color: 'rgba(255, 206, 86, 0.5)'
            },
            {
                label: 'HOA',
                value: monthlyHOAFees,
                color: 'rgba(75, 192, 192, 0.5)'
            },
        ];

        if (pmiRequired) {
            chartData.push({
                label: 'PMI',
                value: monthlyPMI,
                color: 'rgba(255, 87, 51, 0.5)'
            });
        }

        updateChart(chartData);
    }

    function updateChart(chartData) {
        const ctx = $('#chart')[0].getContext('2d');

        if (window.myChart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.map(item => item.label),
                datasets: [{
                    data: chartData.map(item => item.value),
                    backgroundColor: chartData.map(item => item.color),
                }],
            },
            options: {
                cutoutPercentage: 85,
                responsive: false,
                tooltips: false,
            },
        });
    }

    $('#calculator-form input').on('input', () => {
        updateResults();
    });

    updateResults();
})(jQuery);