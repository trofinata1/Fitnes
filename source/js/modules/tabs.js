const count = document.querySelector('[data-tabs-target="coach"]');
const couchPrice = document.querySelector('[data-tabs-target="coach-price"]');
const dailyPrice = document.querySelector('[data-tabs-target="daily"]');
const fullPrice = document.querySelector('[data-tabs-target="full"]');
const tabsBtn = document.querySelectorAll('.tabs__btn');

export const onTabsClick = () => {

  if (document.querySelector('.tabs')) {
    document.querySelector('.tabs').addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;

        tabsBtn.forEach((el) => {el.classList.remove('tabs__btn--active');

          document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');

          if (e.target.getAttribute('data-tabs-path') === '6') {
            count.textContent = '72 занятия';
            couchPrice.textContent = '25000';
            dailyPrice.textContent = '8200';
            fullPrice.textContent = '14200';
          } else if (e.target.getAttribute('data-tabs-path') === '12') {
            count.textContent = '144 занятия';
            couchPrice.textContent = '45000';
            dailyPrice.textContent = '14000';
            fullPrice.textContent = '25000';
          } else if (e.target.getAttribute('data-tabs-path') === '1') {
            count.textContent = '12 занятий';
            couchPrice.textContent = '5000';
            dailyPrice.textContent = '1700';
            fullPrice.textContent = '2700';
          }
        });
      }
    });
  }
};
