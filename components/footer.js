// uma forma melhor seria a de consultar todas a páginas criadas no sanity
const departments = [
  'Cozinha Social',
  'Educação Alimentar',
  'Panificadora Social',
  'Restaurantes',
  'Restrição Alimentar',
  'Agricultura familiar',
  'Alimentação Escolar',
  'Banco de Alimentos',
  'Casas Abrigo',
  'COMSEA',
  'CAISAN',
];
const leafClassNames = ['fa-solid', 'fa-leaf'];
const developedBy = {
  group: 'Turma B',
  degree: 'Engenharia de Software',
};

const createFooterInformationLogoIcon = () => {
  const container = document.createElement('div');
  container.classList.add('icon');

  const icon = document.createElement('i');
  leafClassNames.forEach((className) => {
    icon.classList.add(className);
  });

  container.appendChild(icon);

  return container;
};

const createFooterInformationLogoTitle = (appName) => {
  const title = document.createElement('div');
  title.classList.add('title');
  title.appendChild(document.createTextNode(appName));

  return title;
};

const createFooterInformationLogo = (appName) => {
  const container = document.createElement('div');
  container.classList.add('logo');

  const icon = createFooterInformationLogoIcon();
  const title = createFooterInformationLogoTitle(appName);

  container.appendChild(icon);
  container.appendChild(title);

  return container;
};

const createDepartmentsContainer = () => {
  const container = document.createElement('div');
  container.classList.add('departments-container');

  const half = Math.floor(departments.length / 2);

  const firstHalfContainer = document.createElement('div');
  firstHalfContainer.classList.add('departments-list');

  for (let i = 0; i < half; i++) {
    const department = departments[i];
    const departmentWrapper = document.createElement('p');
    departmentWrapper.appendChild(document.createTextNode(department));
    firstHalfContainer.appendChild(departmentWrapper);
  }

  const secondHalfContainer = document.createElement('div');
  secondHalfContainer.classList.add('departments-list');

  for (let i = half; i < departments.length; i++) {
    const department = departments[i];
    const departmentWrapper = document.createElement('p');
    departmentWrapper.appendChild(document.createTextNode(department));
    secondHalfContainer.appendChild(departmentWrapper);
  }

  container.appendChild(firstHalfContainer);
  container.appendChild(secondHalfContainer);

  return container;
};

const createFooterInformation = (appName) => {
  const container = document.createElement('div');
  container.classList.add('information');

  const logo = createFooterInformationLogo(appName);
  const departmentsContainer = createDepartmentsContainer();

  container.appendChild(logo);
  container.appendChild(departmentsContainer);

  return container;
};

const createFooterDevelopedByLabel = () => {
  const label = document.createElement('div');
  label.classList.add('label');
  label.appendChild(document.createTextNode('Desenvolvido por'));

  return label;
};

const createFooterDevelopedByWho = () => {
  const container = document.createElement('div');
  container.classList.add('who');

  const group = document.createElement('div');
  group.classList.add('group');
  group.appendChild(document.createTextNode(developedBy.group));

  const degree = document.createElement('div');
  degree.classList.add('degree');
  degree.appendChild(document.createTextNode(developedBy.degree));

  container.appendChild(group);
  container.appendChild(degree);

  return container;
};

const createFooterDevelopedBy = () => {
  const container = document.createElement('div');
  container.classList.add('developed-by');

  const label = createFooterDevelopedByLabel();
  const who = createFooterDevelopedByWho();

  container.appendChild(label);
  container.appendChild(who);

  return container;
};

// deve ser o último a ser renderizado dos componentes
const footer = (appName) => {
  const footerElement = document.createElement('footer');

  const informationContainer = createFooterInformation(appName);
  const developedByContainer = createFooterDevelopedBy();

  footerElement.appendChild(informationContainer);
  footerElement.appendChild(developedByContainer);

  document.body.append(footerElement);
};
