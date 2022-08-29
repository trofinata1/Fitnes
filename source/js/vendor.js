// Swiper 8.3.2
import Swiper from './vendor/swiper';

window.addEventListener('load', () => {
  const slider = document.querySelector('.swiper');
  if (slider) {
    const swiper = new Swiper('.swiper', {
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
});

