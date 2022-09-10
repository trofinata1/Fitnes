const reviewsList = document.querySelector('.reviews__swiper-wrapper');

export const getReviewsSlider = () => {
  if (reviewsList) {
    const reviewsItems = reviewsList.querySelectorAll('.swiper-slide');
    const reviewsButtons = document.querySelectorAll('.reviews__button');
    const reviewsSwiper = document.querySelector('.reviews__swiper');

    reviewsList.style.columnGap = '0';
    reviewsList.style.rowGap = '0';
    reviewsList.style.flexWrap = 'nowrap';
    reviewsList.style.justifyContent = 'start';
    reviewsList.style.height = 'auto';

    reviewsItems.forEach((item) => {
      item.style.width = '100%';
    });

    reviewsButtons.forEach((item) => {
      item.style.display = 'block';
    });
  }
};
