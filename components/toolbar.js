/**
 *! Deve ser a primeira função a ser invocada
 */

const menuItems = [
  {
    label: 'Home',
    path: 'index.html',
    key: 'index',
  },
  {
    label: 'Sobre',
    path: 'sobre.html',
    key: 'sobre',
  },
  {
    label: 'Contato',
    path: 'index.html#contact',
    key: 'contato',
  },
];

const createMenuButton = (onClick) => {
  const menuButton = document.createElement('div');
  menuButton.classList.add('icon');

  const iconButtonElement = document.createElement('div');
  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-bars');

  iconButtonElement.appendChild(icon);
  menuButton.appendChild(iconButtonElement);
  menuButton.addEventListener('click', onClick);

  return menuButton;
};

// isFar determina se é uma subpágina ou não
const createNavItem = (currentPage, page, isFar) => {
  const container = document.createElement('li');
  const link = document.createElement('a');
  let href = page.path;

  if (currentPage === page.key) {
    link.classList.add('active');
    href = '#';
  }

  if (isFar) {
    href = `../../${href}`;
  }

  link.setAttribute('href', href);
  link.appendChild(document.createTextNode(page.label));

  container.appendChild(link);

  return container;
};

const createNavItems = (currentPage) => {
  const menuItemsContainer = document.createElement('ul');
  menuItemsContainer.classList.add('menu-items');

  const isFar = !menuItems.some((item) => item.key === currentPage);

  menuItems.forEach((menuItem) => {
    const item = createNavItem(currentPage, menuItem, isFar);
    menuItemsContainer.appendChild(item);
  });

  return menuItemsContainer;
};

const toolbar = (title, onClick, currentPage = null) => {
  const navbarElement = document.createElement('nav');
  navbarElement.classList.add('toolbar');

  const iconContainerElement = createMenuButton(onClick);

  const titleElement = document.createElement('h1');
  titleElement.appendChild(document.createTextNode(title));

  const menuItems = createNavItems(currentPage);

  navbarElement.appendChild(iconContainerElement);
  navbarElement.appendChild(titleElement);
  navbarElement.appendChild(menuItems);

  document.body.appendChild(navbarElement);
};
