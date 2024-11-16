const bannerTitleText = 'Sistema de Segurança Alimentar e Nutricional do Município de Toledo';

const createHeroBanner = ({ imageUrl, caption }) => {
  const container = document.createElement('div');
  container.classList.add('hero-banner');

  const filter = document.createElement('div');
  filter.classList.add('filter');

  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('alt', caption);

  container.appendChild(filter);
  container.appendChild(image);

  return container;
};

const createBannerTitle = (text) => {
  const container = document.createElement('div');
  container.classList.add('title');

  const heading = document.createElement('h2');
  heading.appendChild(
    document.createTextNode(text),
  );

  container.appendChild(heading);

  return container;
};

const banner = (imgData) => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('hero');

  const heroBanner = createHeroBanner(imgData);
  const title = createBannerTitle(bannerTitleText);

  headerElement.appendChild(heroBanner);
  headerElement.appendChild(title);

  document.body.appendChild(headerElement);
};
