const createSlideshowContainer = () => {
  const container = document.createElement('div');
  container.classList.add('slideshow-container');

  return container;
};

const createSlideNumber = ({ index, total }) => {
  const slideNumberElement = document.createElement('div');
  slideNumberElement.classList.add('slide-number');

  slideNumberElement.appendChild(
    document.createTextNode(`${index + 1} / ${total}`),
  );

  return slideNumberElement;
};

const createSlideImage = ({ caption, url }) => {
  const slideImageElement = document.createElement('img');
  slideImageElement.setAttribute('alt', caption);
  slideImageElement.setAttribute('title', caption);
  slideImageElement.setAttribute('src', url);

  return slideImageElement;
};

const createSlideCaption = (caption) => {
  const slideCaptionElement = document.createElement('div');
  slideCaptionElement.classList.add('slide-caption');
  slideCaptionElement.appendChild(
    document.createTextNode(caption),
  );

  return slideCaptionElement;
};

const createSlide = (imageData, info) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slides');
  slideElement.classList.add('fade-animation');

  const slideNumber = createSlideNumber(info);
  const slideImage = createSlideImage(imageData);
  const slideCaption = createSlideCaption(imageData.caption);

  slideElement.appendChild(slideNumber);
  slideElement.appendChild(slideImage);
  slideElement.appendChild(slideCaption);

  return slideElement;
};

const createSlides = (gallery, container) => {
  const total = gallery.length;

  gallery.forEach((imageData, index) => {
    const slide = createSlide(imageData, { index, total });
    container.appendChild(slide);
  });
};

const createControl = (className, onClick, iconName) => {
  const iconElement = document.createElement('i');
  iconElement.classList.add(`fa-solid`);
  iconElement.classList.add(`fa-chevron-${iconName}`);

  const buttonElement = document.createElement('span');
  buttonElement.classList.add(className);
  buttonElement.addEventListener('click', onClick);

  buttonElement.appendChild(iconElement);

  return buttonElement;
};

const createControls = (container) => {
  const leftControl = createControl('prev', previousSlide, 'left');
  const rightControl = createControl('next', nextSlide, 'right');

  container.appendChild(leftControl);
  container.appendChild(rightControl);
};

const createSlideDot = (slideIndex) => {
  const dotElement = document.createElement('span');
  dotElement.classList.add('dot');
  dotElement.addEventListener('click', () => {
    setSlide(slideIndex);
  });

  return dotElement;
};

const createSlideDots = (container, total) => {
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots')

  for (let i = 0; i < total; i++) {
    const dotElement = createSlideDot(i + 1);
    dotsContainer.appendChild(dotElement);
  }

  container.appendChild(dotsContainer);
};

const galleryRender = async (data, callback) => {
  const log = createLogger('gallery');
  const galleryContainer = document.getElementById('gallery');

  if (!galleryContainer) {
    log('Não há seção "galeria".', logLevel.error);
    throw new Error('NoGallerySectionException');
  }

  const slideContainer = createSlideshowContainer();
  createSlides(data, slideContainer);
  createControls(slideContainer);
  createSlideDots(slideContainer, data.length);

  galleryContainer.appendChild(slideContainer);

  if (callback) {
    callback();
  }
};
