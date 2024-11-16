const APP_NAME = 'Segurança Alimentar';
const RESTAURANT_QUERY_URL =
  'https://h3h38j01.api.sanity.io/v2022-03-07/data/query/production?query=*%5B%0A++_type%3D%3D%22restaurant%22%0A%5D+%7B%0A++%22address%22%3A+%7B%0A++++neighborhood%2C%0A++++street%2C%0A++++number%2C%0A++%7D%2C%0A++%22image%22%3A+%7B%0A++++%22url%22%3A+image.asset-%3Eurl%2C%0A++++%22alt%22%3A+name%0A++%7D%0A%7D&perspective=published';

window.addEventListener('load', async () => {
  const [, setIsLoading] = loading();
  const [, setSidebarOpen] = sidebar(
    pageKey.INDEX,
    MENU_ITEMS.main,
    MENU_ITEMS.default
  );
  toolbar(APP_NAME, () => setSidebarOpen(true), pageKey.INDEX);
  setIsLoading(true);
  const { result: restaurantData } = await getData(RESTAURANT_QUERY_URL);
  restaurants(restaurantData);
  cardAboutn();
  contact();
  footer(APP_NAME);
  setIsLoading(false);

  const [accordion] = Array.from(document.getElementsByClassName('accordion'));
  const dots = Array.from(document.getElementsByClassName('dot-wrapper'));
  const panels = Array.from(document.getElementsByClassName('accordion-panel'));

  let panelIndex = 0;
  let intervalId = null;

  const restaurantsCarroussel = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let id = setInterval(() => {
      if (panelIndex === panels.length) {
        panelIndex = 0;
      }

      toggleAccordion(panels[panelIndex++], true);
    }, 5000);

    intervalId = id;
  };

  const toggleAccordion = (panelToActivate, shouldLoad) => {
    const buttons = Array.from(
      panelToActivate.parentElement.getElementsByTagName('button')
    );
    const contents = Array.from(
      panelToActivate.parentElement.getElementsByClassName('accordion-content')
    );

    buttons.forEach((button) => {
      button.setAttribute('aria-expanded', false);
    });

    contents.forEach((content) => {
      content.setAttribute('aria-hidden', true);
    });

    const [panelHeading] = Array.from(
      panelToActivate.getElementsByTagName('h2')
    );
    const panelId = parseInt(
      panelHeading.getAttribute('id').split('-')[0].replace(/\D+/g, '') ?? 0,
      10
    );

    dots.forEach((dot) => {
      dot.classList.remove('active');
      dot.classList.remove('loading');
    });

    const dot = dots.find(
      (d) => d.getAttribute('aria-describedby') === `panel${panelId}`
    );
    dot.classList.add('active');

    if (shouldLoad) {
      dot.classList.add('loading');
    }

    const [panelButton] = Array.from(
      panelToActivate.getElementsByTagName('button')
    );

    const [panelContent] = Array.from(
      panelToActivate.getElementsByClassName('accordion-content')
    );

    panelButton.setAttribute('aria-expanded', true);
    panelContent.setAttribute('aria-hidden', false);
  };

  accordion.addEventListener('click', (event) => {
    const activePanel = event.target.closest('.accordion-panel');

    if (!activePanel) {
      return;
    }

    const [panelHeading] = Array.from(activePanel.getElementsByTagName('h2'));
    const panelId = parseInt(
      panelHeading.getAttribute('id').split('-')[0].replace(/\D+/g, '') ?? 0,
      10
    );

    panelIndex = panelId - 1;

    clearInterval(intervalId);
    setTimeout(() => restaurantsCarroussel(), 2500);
    toggleAccordion(activePanel, false);
  });

  toggleAccordion(panels[panelIndex++], true);
  restaurantsCarroussel();
});
