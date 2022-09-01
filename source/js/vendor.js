// Swiper 8.3.2
import Swiper from './vendor/swiper';

window.addEventListener('load', () => {

  const sliderCoaches = document.querySelector('.coaches__swiper');
  const sliderReviews = document.querySelector('.reviews__swiper');

  if (sliderCoaches) {
    const swiperCoaches = new Swiper('.coaches__swiper', {
      loop: 'true',
      navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 40,
        },
      },
    });

  }

  if (sliderReviews) {
    const swiperReviews = new Swiper('.reviews__swiper', {
      navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
      },
      loopedSlides: '0',
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
    });
  }
});

