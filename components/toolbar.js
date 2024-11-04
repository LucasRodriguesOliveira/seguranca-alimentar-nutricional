/**
 *! Deve ser a primeira função a ser invocada
 */

const menuItems = [
  {
    label: 'Home',
    path: 'index.html',
  },
  {
    label: 'Sobre',
    path: 'about.html',
  },
  {
    label: 'Contato',
    path: 'index.html#contact',
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

  if (currentPage === page.label) {
    link.classList.add('active');
    href = '#';
  }

  if (isFar) {
    href = `../${href}`;
  }

  link.setAttribute('href', href);
  link.appendChild(document.createTextNode(page.label));

  container.appendChild(link);

  return container;
};

const createNavItems = (currentPage) => {
  const menuItemsContainer = document.createElement('ul');
  menuItemsContainer.classList.add('menu-items');

  const isFar = !menuItems.some((item) => item.label === currentPage);

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
