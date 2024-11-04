const LOADING_EVENT_KEY = '__loading__';
const LOADING_EVENT = new Event(LOADING_EVENT_KEY);

const createLoadingCircle = () => {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  return circle;
};

const createLoadingShadow = () => {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  return shadow;
};

const createCircles = (wrapper, quantity) => {
  new Array(quantity).fill().forEach(() => {
    const circle = createLoadingCircle();
    wrapper.appendChild(circle);
  });
};

const createShadows = (wrapper, quantity) => {
  new Array(quantity).fill().forEach(() => {
    const shadow = createLoadingShadow();
    wrapper.appendChild(shadow);
  });
};

const loadingState = {
  loading: false,
};

const loading = () => {
  const container = document.createElement('div');
  container.classList.add('loading-container');

  const message = document.createElement('div');
  message.classList.add('message');
  message.appendChild(document.createTextNode('Carregando'));

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  createCircles(wrapper, 3);
  createShadows(wrapper, 3);

  container.appendChild(wrapper);
  container.appendChild(message);

  container.addEventListener(LOADING_EVENT_KEY, () => {
    if (loadingState.loading) {
      document.body.appendChild(container);
    } else {
      document.body.removeChild(container);
    }
  });

  const setIsLoading = (isLoading) => {
    loadingState.loading = isLoading;
    container.dispatchEvent(LOADING_EVENT);
  };

  return [loadingState.loading, setIsLoading];
};
