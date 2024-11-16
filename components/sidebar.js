const SIDEBAR_EVENT_KEY = '__open_sidebar__';
const SIDEBAR_ACTIVE_CLASSNAME = 'active';
const SIDEBAR_EVENT = new Event(SIDEBAR_EVENT_KEY);

const sidebarState = {
  open: false,
};

const createSidebarCloseButton = (onClick) => {
  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close-btn');
  closeBtn.classList.add('btn');

  const closeBtnIcon = document.createElement('i');
  closeBtnIcon.classList.add('fa-solid');
  closeBtnIcon.classList.add('fa-xmark');

  closeBtn.appendChild(closeBtnIcon);
  closeBtn.addEventListener('click', onClick);

  return closeBtn;
};

const createSidebarHeader = () => {
  const container = document.createElement('div');
  container.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-shapes');

  const title = document.createElement('div');
  title.classList.add('title');
  title.appendChild(document.createTextNode('Menu'));

  logo.appendChild(icon);
  container.appendChild(logo);
  container.appendChild(title);

  return container;
};

const createSidebarItem = (item, isRoot, isActiveMain) => {
  const itemElement = document.createElement('li');

  if (item.active) {
    itemElement.classList.add('active');
  }

  const itemContent = document.createElement('a');
  let path;

  if (item.active) {
    path = '#';
  } else if (isRoot) {
    path = `../../${item.path}`;
  } else if (isActiveMain) {
    path = `/pages/${item.path}/${item.path}.html`;
  } else {
    path = `/pages/${item.path}/${item.path}.html`;
  }

  itemContent.setAttribute('href', path);

  const itemLogo = document.createElement('div');
  itemLogo.classList.add('logo');

  const itemLogoIcon = document.createElement('i');
  item.icon.forEach((className) => {
    itemLogoIcon.classList.add(className);
  });

  const itemLabel = document.createElement('div');
  itemLabel.classList.add('label');
  itemLabel.appendChild(document.createTextNode(item.label));

  itemLogo.appendChild(itemLogoIcon);
  itemContent.appendChild(itemLogo);
  itemContent.appendChild(itemLabel);
  itemElement.appendChild(itemContent);

  return itemElement;
};

const createSidebarMainItems = (items, isActiveMain) => {
  const container = document.createElement('ul');
  container.classList.add('main-items');

  items.forEach((item) => {
    const menuItem = createSidebarItem(item, true, isActiveMain);
    container.appendChild(menuItem);
  });

  return container;
};

const createSidebarItems = (items, isActiveMain) => {
  const container = document.createElement('ul');
  container.classList.add('departments-list');

  items.forEach((item) => {
    const menuItem = createSidebarItem(item, false, isActiveMain);
    container.appendChild(menuItem);
  });

  return container;
};

const createSidebarDivider = () => {
  const divider = document.createElement('div');
  divider.classList.add('divider');

  return divider;
};

const sidebar = (currentPage, mainPages, pages) => {
  if (!Array.isArray(pages) && !Array.isArray(mainPages)) {
    return;
  }

  const activepage = pages.find((page) => page.slug === currentPage);
  if (activepage) {
    activepage.active = true;
  }

  const mainActivePage = mainPages.find((page) => page.slug === currentPage);
  if (mainActivePage) {
    mainActivePage.active = true;
  }

  const container = document.createElement('div');
  container.classList.add('sidebar');
  container.addEventListener(
    SIDEBAR_EVENT_KEY,
    () => {
      if (sidebarState.open) {
        container.classList.add(SIDEBAR_ACTIVE_CLASSNAME);
      } else {
        container.classList.remove(SIDEBAR_ACTIVE_CLASSNAME);
      }
    },
    false
  );

  const setSidebarOpen = (isOpen) => {
    sidebarState.open = isOpen;
    container.dispatchEvent(SIDEBAR_EVENT);
  };

  const closeBtn = createSidebarCloseButton(() => {
    setSidebarOpen(false);
  });
  const header = createSidebarHeader();
  const mainItems = createSidebarMainItems(mainPages, !!mainActivePage);
  const divider = createSidebarDivider();
  const items = createSidebarItems(pages, !!mainActivePage);

  container.appendChild(closeBtn);
  container.appendChild(header);
  container.appendChild(mainItems);
  container.appendChild(divider);
  container.appendChild(items);

  document.body.appendChild(container);

  return [sidebarState.open, setSidebarOpen];
};
