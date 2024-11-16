const createUserCard = ({ avatar_url, html_url, login }) => {
  const card = document.createElement('a');
  card.classList.add('card');
  card.setAttribute('href', html_url);

  const imageElement = document.createElement('img');
  imageElement.classList.add('card-avatar');
  imageElement.setAttribute('src', avatar_url);
  imageElement.setAttribute('alt', login);

  const link = document.createElement('span');
  link.classList.add('card-name');
  link.appendChild(
    document.createTextNode(login),
  );

  card.appendChild(imageElement);
  card.appendChild(link);

  return card;
};

const createContributorsContainer = (data) => {
  const container = document.createElement('div');
  container.classList.add('card-container');

  data
    .sort((a, b) => b.contributions - a.contributions)
    .forEach((user) => {
      const userCard = createUserCard(user);
      container.appendChild(userCard);
    });

  return container;
};

const contributors = async (octokit) => {
  // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/contributors',
    {
      owner: login,
      repo: 'seguranca-alimentar-nutricional',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
  // console.log(data);

  const section = document.createElement('section');
  section.classList.add('contributors');

  const heading = document.createElement('h2');
  heading.appendChild(document.createTextNode('Contribuidores'));

  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode('Todos os contribuidores do projeto')
  );

  const contributorsContainer = createContributorsContainer(data);

  section.appendChild(heading);
  section.appendChild(paragraph);
  section.appendChild(contributorsContainer);

  document.body.appendChild(section);
};
