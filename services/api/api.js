const getData = async (url) => {
  const result = await fetch(url, { method: 'GET' });

  return result.json();
};

const validateParameters = (params) => {
  return params
    .map((param, index) => ({ value: !param, index }))
    .filter((param) => param.value);
};

const fetchData = async (pageKey, callback) => {
  const errors = validateParameters([pageKey, render, pageKeysMap]);
  if (errors.length > 0) {
    errors.forEach((param) => {
      console.error(`Parâmetro ${param.index} não definido`);
    });
    return;
  }

  let pageData = {};

  if (pageKeysMap.has(pageKey)) {
    const { url } = pageKeysMap.get(pageKey);
    const { result } = await getData(url);

    pageData = result[0];
  }

  callback(pageData);

  return pageData;
};
