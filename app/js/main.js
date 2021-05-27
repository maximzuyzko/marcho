$(function () {
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.star').rateYo({
        starWidth: '17px',
        normalFill: '#ccccce',
        rateYo: '#ffc35b',
        readOnly: true,
    })
})