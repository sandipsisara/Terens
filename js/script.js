$(document).ready(function(){

    $('#san1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav:false,
        autoplay: true,
        autoplayTimeout: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

            $('#ct-slider').owlCarousel({
                loop: true,
                margin: 20,
                dots: false,
                nav:true,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items:3 
                    },
                    1000: {
                        items: 3
                    },
                    1100: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });

            $('#home-blog').owlCarousel({
                loop: true,
                margin: 30,
                dots: false,
                nav:true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items:2 
                    },
                    1000: {
                        items: 3
                    }
                   
                }
            });

            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

            
            $('#home-instagram').owlCarousel({
                loop: true,
                margin: 20,
                dots: false,
                nav:true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items:2 
                    },
                    1000: {
                        items: 3
                    },
                    1100: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });

            $(window).scroll(function () {
                var sticky = $('.sticky'),
                    scroll = $(window).scrollTop();
        
                if (scroll >= 100) sticky.addClass('fixed');
                else sticky.removeClass('fixed');
            });

           
            $('.bottom_top').click(function () {
                $("html, body").animate({
                    scrollTop: '0px'
                }, 500);
                return false;
            });
        
            $('.bottom_top').hide();
        
           $(window).scroll(function(){
            if ($(window).scrollTop() > 100) {
                $('.bottom_top').fadeIn();
            }
            else {
                $('.bottom_top').fadeOut();
            }
           });

        $('#bd-card').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav:true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items:2 
                },
                1000: {
                    items: 3
                },
                1100: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });

        setTimeout(function () {
            $('.loaderes').fadeOut();
        }, 3000)

        $('#pro-slider').owlCarousel({
            loop: false,
            rewind: true,
            margin: 20,
            dots: false,
            nav:true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items:2 
                },
                1000: {
                    items: 4
                }
            }
        });
        
        
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            infinite: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            asNavFor: '.slider-for',
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            vertical: true,
            verticalSwiping: true,
            margin: 10,
        });
    

        
            
        
        
})