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
    skipHeader: true,
  },
];

// No momento é fixado o carregamento de dados da página, no qual a estrutura
// é fixa, mudando apenas os dados, mas o correto seria avaliar
// se há necessidade de algum render em específico, baseado nos dados carregados
const render = {
  body: bodyRender,
};

const bannerImageKey =
  'banner-sobre-seguranca-alimentar-e-nutricional1731421373408';

function run(key) {
  const [isLoading, setIsLoading] = loading();
  updateDocumentTitle(APP_NAME);
  const [isOpen, setIsOpen] = sidebar(key, MENU_ITEMS.main, MENU_ITEMS.default);
  toolbar(APP_NAME, () => setIsOpen(true), pageKey.SOBRE);
  setIsLoading(true);

  window.addEventListener('load', async () => {
    const bannerImageData = await getImage(bannerImageKey);
    const pageData = await fetchData(key, ({ title, icon }) => {
      breadcrumb(breadcrumbPath(title));
      updateDocumentTitle(`${APP_NAME} | ${title}`);
      banner(bannerImageData);
      mainRender(title, [], sections, { skipHeader: true, skipTabs: true });
      footer(APP_NAME);
    });

    await pageRender(pageData, render, () => {
      setIsLoading(false);
      Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.classList.add('full-width-image');
      });
    });
  });
}

run(pageKey.SOBRE);
