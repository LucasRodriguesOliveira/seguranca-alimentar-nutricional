// import { Octokit } from "https://esm.sh/octokit";
const APP_NAME = 'Segurança Alimentar';

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
// const octokit = new Octokit({ auth: `<your-token>` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
// const {
//   data: { login },
// } = await octokit.rest.users.getAuthenticated();

// const { data } = await octokit.request(
//   'GET /repos/{owner}/{repo}/contributors',
//   {
//     owner: login,
//     repo: 'seguranca-alimentar-nutricional',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28',
//     },
//   }
// );
// console.log(data.map(({ login, avatar_url, html_url, contributions }) => ({login, avatar_url, html_url, contributions})));

/**
 * * Descomente o código acima para gerar os dados de contribuidores
 * * caso ainda esteja reproduzindo está página de forma estática
 * * copie o resultado e cole abaixo
 * *
 * * Caso já esteja utilizando uma API, apenas construa uma rota para fornecer os dados
 * * de forma segura.
 * *
 * * Isto é importante pois o Github bloqueia push enquanto houver um token
 */

const contributorsData = [
  {
      "login": "LucasRodriguesOliveira",
      "avatar_url": "https://avatars.githubusercontent.com/u/32363406?v=4",
      "html_url": "https://github.com/LucasRodriguesOliveira",
      "contributions": 51
  },
  {
      "login": "davieto",
      "avatar_url": "https://avatars.githubusercontent.com/u/163210177?v=4",
      "html_url": "https://github.com/davieto",
      "contributions": 7
  },
  {
      "login": "CamillyAAz",
      "avatar_url": "https://avatars.githubusercontent.com/u/163211501?v=4",
      "html_url": "https://github.com/CamillyAAz",
      "contributions": 5
  },
  {
      "login": "gustavolunkes",
      "avatar_url": "https://avatars.githubusercontent.com/u/163212079?v=4",
      "html_url": "https://github.com/gustavolunkes",
      "contributions": 5
  },
  {
      "login": "AmandaLFreitas",
      "avatar_url": "https://avatars.githubusercontent.com/u/162519383?v=4",
      "html_url": "https://github.com/AmandaLFreitas",
      "contributions": 3
  },
  {
      "login": "jlealmarins",
      "avatar_url": "https://avatars.githubusercontent.com/u/161653745?v=4",
      "html_url": "https://github.com/jlealmarins",
      "contributions": 3
  },
  {
      "login": "heerdtxx",
      "avatar_url": "https://avatars.githubusercontent.com/u/163211889?v=4",
      "html_url": "https://github.com/heerdtxx",
      "contributions": 2
  },
  {
      "login": "ExportControl",
      "avatar_url": "https://avatars.githubusercontent.com/u/149076908?v=4",
      "html_url": "https://github.com/ExportControl",
      "contributions": 1
  },
  {
      "login": "ttorradaa2",
      "avatar_url": "https://avatars.githubusercontent.com/u/164096827?v=4",
      "html_url": "https://github.com/ttorradaa2",
      "contributions": 1
  },
];

window.addEventListener('load', async () => {
  const [, setIsLoading] = loading();
  const [, setOpenSidebar] = sidebar(null, MENU_ITEMS.main, MENU_ITEMS.default);
  toolbar(APP_NAME, () => setOpenSidebar(true));
  setIsLoading(true);
  await contributors(contributorsData);
  footer(APP_NAME);

  setIsLoading(false);
});
