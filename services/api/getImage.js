const imageBaseUrl = 'https://h3h38j01.api.sanity.io/v2022-03-07/data/query/production?query=*%5B%0A++_type%3D%3D%22asset_image%22%0A++%26%26+slug.current+%3D%3D+%24id%0A%5D+%7B%0A++...%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%0A%7D&%24id=%22<image-key>%22&perspective=published';
const imagePattern = /<image-key>/;

const getImage = async (key) => {
  const url = imageBaseUrl.replace(imagePattern, key);
  const data = await getData(url);

  return data.result[0];
};
