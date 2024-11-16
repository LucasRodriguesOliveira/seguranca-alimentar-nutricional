const iconSvgId = '#location-dot';

const createRestaurantAccordionHeadingButton = (id, { neighborhood }) => {
  const button = document.createElement('button');
  button.classList.add('accordion-trigger');
  button.setAttribute('aria-controls', `${id}-content`);
  button.setAttribute('aria-expanded', false);

  const span = document.createElement('span');
  span.classList.add('accordion-title');
  span.setAttribute('id', `${id}-title`);
  span.appendChild(
    document.createTextNode(neighborhood),
  );

  const svg = document.createElement('svg');
  svg.setAttribute('aria-hidden', true);
  svg.classList.add('accordion-icon');

  const use = document.createElement('use');
  use.setAttribute('href', iconSvgId);

  svg.appendChild(use);

  const iconElementWrapper = document.createElement('div');
  iconElementWrapper.setAttribute('aria-hidden', true);
  iconElementWrapper.classList.add('accordion-icon');

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid');
  iconElement.classList.add('fa-location-dot');

  iconElementWrapper.appendChild(iconElement);

  button.appendChild(span);
  button.appendChild(iconElementWrapper);

  return button;
};

const createRestaurantAccordionHeading = (id, { address }) => {
  const heading = document.createElement('h2');
  heading.setAttribute('id', `${id}-heading`);

  const button = createRestaurantAccordionHeadingButton(id, address);

  heading.appendChild(button);

  return heading;
};

const createRestaurantAccordionContent = (id, { address, image }) => {
  const content = document.createElement('div');
  content.classList.add('accordion-content');
  content.setAttribute('id', `${id}-content`);
  content.setAttribute('aria-labelledby', `${id}-heading`);
  content.setAttribute('aria-hidden', false);
  content.setAttribute('role', 'region');

  const text = document.createElement('p');
  text.appendChild(
    document.createTextNode(`${address.street}, ${address.number}`),
  );

  const imageElement = document.createElement('img');
  imageElement.classList.add('accordion-image');
  imageElement.setAttribute('src', image.url);
  imageElement.setAttribute('alt', image.alt);

  content.appendChild(text);
  content.appendChild(imageElement);

  return content;
};

const createRestaurantAccordionPanel = (id, data) => {
  const panel = document.createElement('div');
  panel.classList.add('accordion-panel');

  // Heading
  const heading = createRestaurantAccordionHeading(id, data);

  // Content
  const content = createRestaurantAccordionContent(id, data);

  panel.appendChild(heading);
  panel.appendChild(content);

  return panel;
};

const createRestaurantAccordion = (data) => {
  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  if (Array.isArray(data)) {
    data.forEach((accordionData, index) => {
      const accordionPanel = createRestaurantAccordionPanel(
        `panel${index + 1}`,
        accordionData
      );

      accordion.appendChild(accordionPanel);
    });
  }

  return accordion;
};

const createRestaurantAccordionControl = (index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('dot-wrapper');
  wrapper.setAttribute('aria-describedby', `panel${index}`);

  const dot = document.createElement('div');
  dot.classList.add('dot');

  wrapper.appendChild(dot);

  return wrapper;
};

const createRestaurantAccordionControls = (length) => {
  const dots = document.createElement('div');
  dots.classList.add('dots');

  new Array(length).fill().forEach((_, index) => {
    const dot = createRestaurantAccordionControl(index + 1);
    dots.appendChild(dot);
  });

  return dots;
};

const createRestaurantSlides = (data) => {
  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Accordion
  const accordion = createRestaurantAccordion(data);

  // Controls
  const controls = createRestaurantAccordionControls(data.length);

  wrapper.appendChild(accordion);
  wrapper.appendChild(controls);

  return wrapper;
};

const createRestaurantHeader = () => {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid');
  iconElement.classList.add('fa-utensils');

  const heading = document.createElement('h2');
  heading.appendChild(
    document.createTextNode('Restaurantes Populares'),
  );

  headerElement.appendChild(iconElement);
  headerElement.appendChild(heading);

  return headerElement;
};

const restaurants = (data) => {
  if (!Array.isArray(data)) {
    return;
  }

  const section = document.createElement('section');
  section.classList.add('restaurants');

  const restauraantsHeader = createRestaurantHeader();
  const restaurantsSlides = createRestaurantSlides(data);

  section.appendChild(restauraantsHeader);
  section.appendChild(restaurantsSlides);

  document.body.appendChild(section);
};
