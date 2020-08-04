$(function(){

    $(".rate-star").rateYo({
        rating: 1,
        starWidth: "12px",
        readOnly: true,
        maxValue: 1,
        numStars: 5,
        // starSvg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>,
        
    });

    $('.product-slider__inner-content').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: false,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-next.png" alt=""></button>',
    });

    $('.followers-slider__inner-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-next.png" alt=""></button>',
    });

    var mixer = mixitup('.products__inner-box');


});