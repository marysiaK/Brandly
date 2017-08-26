$( document ).ready(function() {
    
     //slick slider
        $('.hero-slider').slick({
          autoplay: true,
          arrows: false,
          dots: true,
        });

        $('.blog-slider').slick({
            autoplay: true,
            slidesToShow: 2,
            arrows: true,
            dots: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
        });
   

    // main navigation visibility on scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300 && $(window).width() > 767) {
            $('.main-header').addClass('main-nav--is-scrolled-down');

        } else {
            $('.main-header').removeClass('main-nav--is-scrolled-down');
        }
    });

    // mobile navigation
    $('.hamburger-menu').click(function() { 
        $('.main-nav').toggleClass('mobile-nav--open');
    });

    $('.main-nav__link').click(function() { 
        $('.main-nav').removeClass('mobile-nav--open');
    });

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.page-section', { duration: 1000, distance: '0', viewFactor: 0.4});

    // smooth scroll
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -110,
            }, 1000);
            return false;
          }
        }
      });
    });
 });
