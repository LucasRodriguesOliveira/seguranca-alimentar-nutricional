const fileTypes = {
  pdfFile: {
    icon: 'pdf',
    helperText: 'Arquivo PDF'
  },
  excelFile: {
    icon: 'excel',
    helperText: 'Arquivo Excel'
  },
};

const createCaretIcon = (orientation) => {
  const caret = document.createElement('i');
  caret.classList.add('fa-solid');
  caret.classList.add(`fa-caret-${orientation}`);

  return caret;
}

const createAccordionHeader = (groupName, onClick) => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');
  headerContainer.appendChild(
    document.createTextNode(groupName),
  );

  const icon = document.createElement('div');
  icon.classList.add('icon');

  const caretUp = createCaretIcon('up');
  const caretDown = createCaretIcon('down');

  icon.appendChild(caretDown);
  headerContainer.addEventListener('click', () => {
    onClick({ downIcon: caretDown, upIcon: caretUp });
  })

  headerContainer.appendChild(icon);

  return headerContainer;
};

const createFileItem = ({ url, name, _type: type }) => {
  const fileItemElement = document.createElement('li');
  const fileLinkElement = document.createElement('a');
  const fileLinkTypeIcon = document.createElement('i');
  const fileLinkDownloadIcon = document.createElement('i');

  const fileType = fileTypes[type];

  fileLinkTypeIcon.classList.add('fa-solid');
  fileLinkTypeIcon.classList.add(`fa-file-${fileType.icon}`);
  fileLinkTypeIcon.setAttribute('title', fileType.helperText);

  fileLinkDownloadIcon.classList.add('fa-solid');
  fileLinkDownloadIcon.classList.add('fa-download');

  fileLinkElement.setAttribute('href', url);
  fileLinkElement.setAttribute('download', 'on');
  fileLinkElement.appendChild(
    document.createTextNode(name),
  );
  fileLinkElement.appendChild(fileLinkDownloadIcon);

  fileItemElement.appendChild(fileLinkTypeIcon);
  fileItemElement.appendChild(fileLinkElement);

  return fileItemElement;
};

const createAccordionPanel = (data) => {
  const panel = document.createElement('ul');
  panel.classList.add('panel');

  data.forEach((file) => {
    const fileItem = createFileItem(file);
    panel.appendChild(fileItem);
  });

  return panel;
};

const createAccordion = ({ key, data }) => {
  const container = document.createElement('div');
  container.classList.add('accordion');
  const panel = createAccordionPanel(data);
  const header = createAccordionHeader(
    key,
    (icons) => {
      const { style: { maxHeight } } = panel;
      const [icon] = header.getElementsByTagName('div');

      if (maxHeight === '0' || maxHeight === '0px' || maxHeight.length === 0) {
        icon.removeChild(icons.downIcon);
        icon.appendChild(icons.upIcon);
        panel.style.maxHeight = '350px';
        header.classList.add('active');
      } else {
        icon.removeChild(icons.upIcon);
        icon.appendChild(icons.downIcon);
        panel.style.maxHeight = '0';
        header.classList.remove('active');
      }
    }
  );

  container.appendChild(header);
  container.appendChild(panel);

  return container;
};

const createAccordionContainer = (data) => {
  const container = document.createElement('div');
  container.classList.add('accordion-container');

  const groups = new Map(data.map((file) => ([file.group, []])));

  data.forEach((file) => {
    groups.get(file.group).push(file);
  });

  Array.from(groups).forEach(([key, data]) => {
    const accordion = createAccordion({ key, data });
    container.appendChild(accordion);
  });

  const wrapper = document.createElement('div');
  wrapper.classList.add('accordions');
  wrapper.appendChild(container);

  return wrapper;
};

const fileRender = async (data, callback) => {
  const log = createLogger('files');
  const fileContainer = document.getElementById('files');

  if (!fileContainer) {
    log('Não há seção "arquivos".', logLevel.error);
    throw new Error('NoFileSectionException');
  }

  const accordionContainer = createAccordionContainer(data);

  fileContainer.appendChild(accordionContainer);

  if (callback) {
    callback();
  }
};
