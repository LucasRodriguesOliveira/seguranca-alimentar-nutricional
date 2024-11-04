const createBreadcrumbItem = ({ label, path, index, isLink }) => {
  const container = document.createElement('li');

  if (!isLink) {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(label));

    container.appendChild(span);

    return container;
  }

  const link = document.createElement('a');
  link.classList.add('link');
  link.setAttribute('href', path);

  if (index === 0) {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-chevron-left');

    link.appendChild(icon);
  }

  link.appendChild(document.createTextNode(label));

  container.appendChild(link);

  return container;
};

const breadcrumb = (path) => {
  if (!Array.isArray(path)) {
    return;
  }
  const container = document.createElement('ul');
  container.classList.add('breadcrumb');

  path.forEach((pathData, index) => {
    const item = createBreadcrumbItem({
      ...pathData,
      index,
      isLink: index !== path.length - 1,
    });

    container.appendChild(item);
  });

  document.body.appendChild(container);
};
