const createMainIcon = (iconClassNames) => {
  if (!Array.isArray(iconClassNames)) {
    return null;
  }

  const container = document.createElement('div');
  container.classList.add('icon');

  const icon = document.createElement('i');
  iconClassNames.forEach((iconClassName) => {
    icon.classList.add(iconClassName);
  });

  container.appendChild(icon);

  return container;
};

const createMainTitle = (title) => {
  const container = document.createElement('div');
  container.classList.add('title');

  const heading = document.createElement('h2');
  heading.appendChild(
    document.createTextNode(title),
  );

  container.appendChild(heading);

  return container;
};

const createMainHeader = (title, icon) => {
  const iconElement = createMainIcon(icon);
  const titleElement = createMainTitle(title);

  const header = document.createElement('header');
  header.classList.add('department');

  header.appendChild(iconElement);
  header.appendChild(titleElement);

  return header;
};

const createMainContentTabItem = (item) => {
  const itemElement = document.createElement('li');
  itemElement.classList.add('tab-item');

  const link = document.createElement('a');
  link.setAttribute('href', `#${item.path}`);
  link.appendChild(
    document.createTextNode(item.label),
  );

  itemElement.appendChild(link);

  return itemElement;
};

const createMainContentTabs = (sections) => {
  if(!Array.isArray(sections)) {
    return null;
  }

  const container = document.createElement('section');
  container.classList.add('content-tabs');

  const tabList = document.createElement('ul');
  tabList.classList.add('tab-list');

  sections.forEach((section) => {
    const tab = createMainContentTabItem(section);
    tabList.appendChild(tab);
  });

  container.appendChild(tabList);

  return container;
};

const createMainSection = (section) => {
  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', section.path);

  if(!section?.skipHeader) {
    const sectionTitle = document.createElement('h3');
  sectionTitle.appendChild(
    document.createTextNode(section.label),
  );

  sectionElement.appendChild(sectionTitle);
  }

  return sectionElement;
}

const mainRender = (title, icon, sections) => {
  const mainContainer = document.createElement('main');

  const header = createMainHeader(title, icon);
  mainContainer.appendChild(header);

  if(Array.isArray(sections)) {
    const tabList = createMainContentTabs(sections);
    mainContainer.appendChild(tabList);

    sections.forEach((section) => {
      const item = createMainSection(section);
      mainContainer.appendChild(item);
    });
  }

  document.body.appendChild(mainContainer);
};
