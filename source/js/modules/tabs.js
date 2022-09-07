const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabs = document.querySelector('.tabs');
const tabsContents = document.querySelectorAll('.tabs__content');
const tabsHidden = document.querySelectorAll('[data-tabs-hidden]');

export const addClassToTab = () => {
  tabsHidden.forEach((item) => {
    item.classList.add('with-js');
  });
};

export const onTabsClick = () => {

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove('is-active');
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('is-active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContents.forEach((el) => {
      el.classList.remove('is-active');
      el.classList.add('with-js');
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('is-active');
  };
};
