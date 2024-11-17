// Comente a linha a seguir se optar por um logger mais sofisticado e adicione o script de logger
// const logger = false;
const APP_NAME = 'Segurança Alimentar';
const breadcrumbPath = (title) => {
  return [
    {
      label: 'Início',
      path: '../../index.html',
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
];

// No momento é fixado o carregamento de dados da página, no qual a estrutura
// é fixa, mudando apenas os dados, mas o correto seria avaliar
// se há necessidade de algum render em específico, baseado nos dados carregados
const render = {
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

run(pageKey.COZINHA_SOCIAL);
