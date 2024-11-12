const styleEnum = {
  NORMAL: 'normal',
  HEADING_1: 'h4',
  HEADING_2: 'h5',
  HEADING_3: 'h6',
};

const markEnum = {
  BOLD: 'strong',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
};

const contentTransform = (data) => {
  return Promise.all(
    data.map(async ({ children, style, listItem }) => {
      const text =
        children.length > 1
          ? children.map(({ text, marks }) => ({
              text,
              marks,
            }))
          : children[0].text;

      const isCaption = children[0].text.match(/^\[caption\]/);

      let image =
        children.length === 1 ? !!children[0].text.match(/^\[image\]/) : '';

      if (image) {
        // remove o texto, mantendo somente o id
        const id = children[0].text.replace(/^\[image\]/, '');
        const imageData = await getImage(id);

        image = {
          id,
          data: imageData,
        };
      }

      return {
        style,
        text,
        image,
        listItem,
        isCaption: !!isCaption,
      };
    })
  );
};

const createLogger = (context) => {
  if (logger && pageKey) {
    return logger(`${pageKey?.AGRICULTURA_FAMILIAR || ''}:render:${context}`);
  } else {
    return console.log;
  }
};

const createTextElement = (text, marks) => {
  const textNode = document.createTextNode(text);

  return marks
    .map((mark) => {
      if (mark === markEnum.BOLD) {
        return document.createElement('strong');
      }

      if (mark === markEnum.ITALIC) {
        return document.createElement('em');
      }

      if (mark === markEnum.UNDERLINE) {
        return document.createElement('u');
      }

      return document.createElement('span');
    })
    .reduce((prev, next) => {
      next.appendChild(prev);
      return next;
    }, textNode);
};

const createParagraph = (text, isCaption) => {
  const element = document.createElement('p');

  if (!Array.isArray(text)) {
    if (isCaption) {
      element.classList.add('caption');
    }

    text = text.replace(/^\[caption\]/, '');

    element.appendChild(document.createTextNode(text));

    return element;
  }

  text.map((item) => {
    const textElement = createTextElement(item.text, item.marks);
    element.append(textElement);
  });

  return element;
};

const createImage = ({ data }) => {
  const element = document.createElement('img');

  if (data?.caption) {
    element.setAttribute('title', data.caption);
  }

  element.setAttribute('alt', data.name);
  element.setAttribute('src', data.imageUrl);
  return element;
};

const createHeading = (text, level) => {
  const element = document.createElement(level);
  const textNode = document.createTextNode(text);

  element.appendChild(textNode);

  return element;
};

const createListItem = (text) => {
  const element = document.createElement('li');
  element.appendChild(document.createTextNode(text));
  return element;
};

const createList = (listType) => {
  console.log(listType);
  if (listType === 'ordered') {
    return document.createElement('ol');
  }

  return document.createElement('ul');
};

const createAboutItem = ({ text, image, style, listItem, isCaption }, list) => {
  let item;
  if (style === styleEnum.NORMAL) {
    if (image) {
      item = {
        element: createImage(image),
      };
    } else if (listItem) {
      if (!list) {
        console.log(listItem);
        list = createList(listItem === 'bullet' ? 'unordered' : 'ordered');
      }

      const listItemElement = createListItem(text);
      list.appendChild(listItemElement);

      item = {
        list,
        isLista: true,
        element: null,
      };
    } else {
      item = {
        element: createParagraph(text, isCaption),
      };
    }
  }

  if (style.match(/h[4-6]/)) {
    item = {
      element: createHeading(text, style),
    };
  }

  return item;
};

const bodyRender = async (data, callback) => {
  const log = createLogger('body');
  const contentList = await contentTransform(data);
  const container = document.getElementById('about');

  if (!container) {
    log('Não há seção "sobre".', logLevel.error);
    throw new Error('NoAboutSectionException');
  }

  let list;

  contentList.forEach((content) => {
    const item = createAboutItem(content, list);
    if (item?.list) {
      list = item.list;
      console.log(list);
    }
    if (!item?.isLista && list) {
      container.appendChild(list);

      list = null;
    }

    if (!item) {
      log('Elemento não registrado para renderização', logLevel.error);
      log(content.style, logLevel.warn);
      throw new Error('NotRegisteredItem');
    }

    if (item?.element) {
      container.appendChild(item.element);
    }
  });

  if (list) {
    container.appendChild(list);
  }

  if (callback) {
    callback();
  }
};
