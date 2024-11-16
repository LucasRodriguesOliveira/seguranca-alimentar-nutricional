const APP_NAME = 'Segurança Alimentar';
// const logger = false;
const breadcrumbPath = (title) => {
  return [
    {
      label: 'Início',
      path: '../index.html',
    },
    {
      label: title,
      path: '#',
    },
  ];
};
const sections = [
  {
    path: 'about',
    label: 'Sobre',
  },
  {
    path: 'gallery',
    label: 'Galeria',
  },
  {
    path: 'files',
    label: 'Arquivos',
  },
];

const render = {
  file: fileRender,
  gallery: galleryRender,
  body: bodyRender,
};

function run(key) {
  const [isLoading, setIsLoading] = loading();
  updateDocumentTitle(APP_NAME);
  const [isOpen, setIsOpen] = sidebar(key, MENU_ITEMS.main, MENU_ITEMS.default);
  toolbar(APP_NAME, () => setIsOpen(true));
  setIsLoading(true);

  window.addEventListener('load', async () => {
    const pageData = await fetchData(key, ({ title, icon }) => {
      breadcrumb(breadcrumbPath(title));
      updateDocumentTitle(`${APP_NAME} | ${title}`);
      mainRender(title, icon.split(' '), sections);
      footer(APP_NAME);
    });

    await pageRender(pageData, render, () => {
      showSlides(slideIndex);
      setIsLoading(false);
    });
  });
}

run(pageKey.COMSEA);
