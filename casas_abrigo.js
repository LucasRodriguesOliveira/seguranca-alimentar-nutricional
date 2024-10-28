window.onload = async () => {
  const result = await fetch(URL, {
    method: 'GET',
  });

  console.log(await result.json());
}