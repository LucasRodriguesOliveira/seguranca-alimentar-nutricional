import { Octokit } from "https://esm.sh/octokit";
const APP_NAME = 'Segurança Alimentar';

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `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` });

window.addEventListener('load', async () => {
  const [, setIsLoading] = loading();
  const [, setOpenSidebar] = sidebar(null, MENU_ITEMS.main, MENU_ITEMS.default);
  toolbar(APP_NAME, () => setOpenSidebar(true));
  setIsLoading(true);
  await contributors(octokit);
  footer(APP_NAME);

  setIsLoading(false);
});
