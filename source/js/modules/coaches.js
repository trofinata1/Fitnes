const coachesList = document.querySelector('.coaches__swiper-wrapper');

export const getCoachesSlider = () => {
  if (coachesList) {

    const coachesItems = coachesList.querySelectorAll('.swiper-slide');
    const coachesButtons = document.querySelectorAll('.coaches__button');
    const coachesSwiper = document.querySelector('.coaches__swiper');

    coachesList.style.columnGap = '0';
    coachesList.style.rowGap = '0';
    coachesList.style.flexWrap = 'nowrap';
    coachesList.style.justifyContent = 'start';
    coachesSwiper.style.height = '294px';

    if (coachesItems) {
      coachesItems.forEach((item) => {
        item.style.width = '100%';
      });
    }

    coachesButtons.forEach((item) => {
      item.style.display = 'block';
    });
  }
};
