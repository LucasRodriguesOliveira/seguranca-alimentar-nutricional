const pageRender = async (data, render, callback) => {
  try {
    await Promise.all(
      Object.getOwnPropertyNames(render)
        .filter((renderProp) => !!data[renderProp])
        .map(
          (renderProp) => render[renderProp](
            data[renderProp],
            null
          )
        )
      );
  } catch (err) {
    console.error('Não foi possível realizar a renderização.');
    console.error(err);
  }

  if (callback) {
    callback(data);
  }
}