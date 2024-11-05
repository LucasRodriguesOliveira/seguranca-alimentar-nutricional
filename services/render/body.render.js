const styleEnum = {
  NORMAL: 'normal',
  HEADING_1: 'h4',
  HEADING_2: 'h5',
  HEADING_3: 'h6',
};

const markEnum = {
  BOLD: 'strong',
  ITALIC: 'italic',
  UNDERLINE: 'underline'
};

const contentTransform = (data) => {
  return data.map(({ children, style }) => {
    const text = children.length > 1
      ? children.map(({ text, marks }) => ({
        text,
        marks,
      }))
      : children[0].text;

    let image = children.length === 1
      ? !!children[0].text.match(/(\[.+\]\(.+\))/)
      : '';

    if (image) {
      const url = children[0].text
        .replace(/(\[.+\])(\(.+\))/, '$2') // remove o texto, mantendo somente a url
        .replace(/\(/, '') // remove o parênteses inicial
        .replace(/\)/, ''); // remove o parênteses final
      const citation = children[0].text
        .replace(/(\[.+\])(\(.+\))/, '$1') // remove a url, mantendo somente o texto
        .replace(/\[/, '') // remove o conchetes inicial
        .replace(/\]/, ''); // remove o conchetes final

      image = {
        url,
        citation
      };
    }

    return {
      style,
      text,
      image
    };
  });
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

const createParagraph = (text) => {
  const element = document.createElement('p');

  if (!Array.isArray(text)) {
    element.appendChild(
      document.createTextNode(text),
    );

    return element;
  }

  text.map((item) => {
    const textElement = createTextElement(item.text, item.marks);
    element.append(textElement);
  })

  return element;
}

const createHeading = (text, level) => {
  const element = document.createElement(level);
  const textNode = document.createTextNode(text);

  element.appendChild(textNode);

  return element;
}

const createAboutItem = ({ text, image, style }) => {
  if (style === styleEnum.NORMAL) {
    if (image) {
      return createImage(image);
    }

    return createParagraph(text);
  }

  if (style.match(/h[4-6]/)) {
    return createHeading(text, style);
  }

  return null;
}

const bodyRender = async (data, callback) => {
  const log = createLogger('body');
  const contentList = contentTransform(data);
  const container = document.getElementById('about');

  if (!container) {
    log('Não há seção "sobre".', logLevel.error);
    throw new Error('NoAboutSectionException');
  }

  contentList.forEach((content) => {
    const item = createAboutItem(content);

    if (!item) {
      log('Elemento não registrado para renderização', logLevel.error);
      log(content.style, logLevel.warn);
      throw new Error('NotRegisteredItem');
    }

    container.appendChild(item);
  });

  if (callback) {
    callback();
  }
};