import Swiper from 'swiper';
import 'swiper/css';


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.atmosphere-swiper', {
        breakpoints: {
            374: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: false,
            },
            1439: {
                slidesPerView: 3.3,
                spaceBetween: 24,
                centeredSlides: false,
            },
        },

        loop: true,
        slideClass: 'atmosphere-swiper-slide',
        wrapperClass: 'atmosphere-swiper-wrapper',
        direction: 'horizontal',
    });

    new Swiper('.section-swiper-second', {
        breakpoints: {
            374: {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false,
            },
            1439: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,
            },
        },

        loop: true,
        slideClass: 'section-swiper-slide',
        wrapperClass: 'section-swiper-wrapper',
        direction: 'horizontal',
    });
});