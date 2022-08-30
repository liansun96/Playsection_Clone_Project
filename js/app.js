const leftIcon = `<img src="../images/left-arrow.svg" class="nav-img" alt="left">`;
const rightIcon = `<img src="../images/right-arrow.svg" class="nav-img" alt="right">`;


const swiper1 = new Swiper('.swiper1', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiper2 = new Swiper('.swiper2', {
//   Optional parameters
// direction: 'vertical',
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiper3 = new Swiper('.swiper3', {
    loop: true,
    // effect: "fade",
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

var owlMiniCard = $('#owl-miniCard');
owlMiniCard.owlCarousel({
    margin:17,
    loop:true,
    autoWidth:true,
    items:3,
    // nav: true,
    navText: [ "< PREV  " , "  NEXT >" ],
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

var owlSecMiniCard = $('#owl-second-miniCard');
owlSecMiniCard.owlCarousel({
    margin:17,
    loop:true,
    autoWidth:true,
    items:3,
    // nav: true,
    navText: [ "< PREV  " , "  NEXT >" ],
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

var owlOne = $('#owl-newReleases-one');
owlOne.owlCarousel({
    margin:30,
    loop:true,
    autoWidth:true,
    items:2,
    nav: true,
    navText: [ "< PREV  " , "  NEXT >" ],
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:4000,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

var owlOneMobile = $('#owl-newReleases-oneMobile');
owlOneMobile.owlCarousel({
    margin:20,
    loop:true,
    autoWidth:true,
    items:2,
    // nav: true,
    navText: [ "< PREV  " , "  NEXT >" ],
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    dots: true,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

var owlTwoMobile = $('#owl-comingSoon-oneMobile');
owlTwoMobile.owlCarousel({
    margin:20,
    loop:true,
    autoWidth:true,
    items:2,
    // nav: true,
    navText: [ "< PREV  " , "  NEXT >" ],
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

$(document).ready(function(){
    var owlTwo = $('#owl-two');
    owlTwo.owlCarousel({
        margin:21,
        loop:true,
        autoWidth:true,
        nav: true,
        dots :true,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass:true,
        // autoplay:true,
        autoplayTimeout:2000,
        // autoplayHoverPause:true,
        delay : 3000,
        dotsEach: true,

        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
});