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

var owlTwo = $('#owl-two');
owlTwo.owlCarousel({
    margin:21,
    loop:true,
    autoWidth:true,
    nav: true,
    dots :true,
    navText: [ "< PREV  " , "  NEXT >" ],
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
