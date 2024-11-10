const pageKey = {
  AGRICULTURA_FAMILIAR: 'agricultura-familiar',
  ALIMENTACAO_ESCOLAR: 'alimentacao-escolar',
  COMSEA: 'comsea',
  PANIFICADORA_SOCIAL: 'panificadora-social',
  BANCO_DE_ALIMENTOS: 'banco-de-alimentos',
  CAISAN: 'caisan',
  COZINHA_SOCIAL: 'cozinha-social',
  CASAS_ABRIGO: 'casas-abrigo',
  RESTAURANTES: 'restaurantes',
  EDUCACAO_ALIMENTAR: 'educacao-alimentar',
};

const makeUrl = (key) => {
  return `https://h3h38j01.api.sanity.io/v2022-03-07/data/query/production?query=*%5B%0A++_type%3D%3D%22post%22%0A++%26%26+slug.current%3D%3D%24page%0A%5D%7B%0A++_id%2C%0A++body%2C%0A++gallery%5B%5D%7B%0A++++%22url%22%3A+asset-%3Eurl%2C%0A++++caption%0A++%7D%2C%0A++file%5B%5D+%7B%0A++++%22url%22%3A+asset-%3Eurl%2C%0A++++group%2C%0A++++name%2C%0A++++_type%0A++%7D%2C%0A++title%2C%0A++%22icon%22%3A+icon-%3Evalue%0A%7D&%24page=%22${key}%22&perspective=published`;
};

const pageKeysMap = new Map(
  Object.getOwnPropertyNames(pageKey).map((propName) => {
    const pageSlug = pageKey[propName];
    const pageConfig = {
      key: pageSlug,
      url: makeUrl(pageSlug),
    };

    return [pageConfig.key, pageConfig];
  })
);
