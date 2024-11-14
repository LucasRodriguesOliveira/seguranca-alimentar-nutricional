const createRestaurantCarousselLoader = () => {
    const loaderElement = document.createElement('div');
    loaderElement.classList.add('caroussel-loader');

    return loaderElement;
}

const createRestaurantCarousselControls = () => {
    const controlsElement = document.createElement('div');
    controlsElement.classList.add('caroussel-controls');

    const loader = createRestaurantCarousselLoader();

    controlsElement.appendChild(loader);

    return controlsElement;
}

//inicio slide 4
const createSlide4AdressP2 = () => {
    const p2Slide4Element = document.createElement('p');
    p2Slide4Element.classList.add('number');
    p2Slide4Element.textContent = '800';

    return p2Slide4Element;
}

const createSlide4AdressP1 = () => {
    const p1Slide4Element = document.createElement('p');
    p1Slide4Element.classList.add('street');
    p1Slide4Element.textContent = 'Rua João Pessoa';

    return p1Slide4Element;
}

const createRestaurantSlide4Adress = () => {
    const adressSlide4Element = document.createElement('div');
    adressSlide4Element.classList.add('address');

    const paragraphSlide4_1 = createSlide4AdressP1();
    const paragraphSlide4_2 = createSlide4AdressP2();

    adressSlide4Element.appendChild(paragraphSlide4_1);
    adressSlide4Element.appendChild(paragraphSlide4_2);

    return adressSlide4Element;
}

const createIconSlide4 = () => {
    const iconSlide4Element = document.createElement('i');
    iconSlide4Element.classList.add('fa-solid', 'fa-location-dot');

    return iconSlide4Element;
}

const createRestaurantSlide4Icon = () => {
    const slide4IconElement = document.createElement('div');
    slide4IconElement.classList.add('icon');

    const slide4Icon = createIconSlide4();

    slide4IconElement.appendChild(slide4Icon);

    return slide4IconElement;
}

const createRestaurantCarousselContentSlide4Details = () => {
    const slide4Details = document.createElement('div');
    slide4Details.classList.add('details');

    const iconSlide4 = createRestaurantSlide4Icon();
    const adressSlide4 = createRestaurantSlide4Adress();

    slide4Details.appendChild(iconSlide4);
    slide4Details.appendChild(adressSlide4);

    return slide4Details;
}

const createRestaurantCarousselContentSlide4Title = () => {
    const slide4Title = document.createElement('div');
    slide4Title.classList.add('title');
    slide4Title.textContent = 'Jd. Europa';

    return slide4Title;
}

const createRestaurantCarousselContentSlide4 = () => {
    const contentElement4 = document.createElement('div');
    contentElement4.classList.add('content');

    const titleSlide4 = createRestaurantCarousselContentSlide4Title();
    const detailsSlide4 = createRestaurantCarousselContentSlide4Details();

    contentElement4.appendChild(titleSlide4);
    contentElement4.appendChild(detailsSlide4);

    return contentElement4;
}

const createRestaurantCarousselImage4 = () => {
    const imageElement4 = document.createElement('img');
    imageElement4.src = '../assets/imgs/restaurante_paulista_001_3.jpg';
    imageElement4.alt = 'restaurante 4';

    return imageElement4;
}

const createRestaurantSlide4 = () => {
    const slide4Element = document.createElement('div');
    slide4Element.classList.add('slide');
    slide4Element.id = 'slide4';

    const image4 = createRestaurantCarousselImage4();
    const content4 = createRestaurantCarousselContentSlide4();

    slide4Element.appendChild(image4);
    slide4Element.appendChild(content4);

    return slide4Element;
}

//inicio slide 3
const createSlide3AdressP2 = () => {
    const p2Slide3Element = document.createElement('p');
    p2Slide3Element.classList.add('number');
    p2Slide3Element.textContent = '1151';

    return p2Slide3Element;
}

const createSlide3AdressP1 = () => {
    const p1Slide3Element = document.createElement('p');
    p1Slide3Element.classList.add('street');
    p1Slide3Element.textContent = 'Rua Pres. Getúlio Vargas';

    return p1Slide3Element;
}

const createRestaurantSlide3Adress = () => {
    const adressSlide3Element = document.createElement('div');
    adressSlide3Element.classList.add('address');

    const paragraphSlide3_1 = createSlide3AdressP1();
    const paragraphSlide3_2 = createSlide3AdressP2();

    adressSlide3Element.appendChild(paragraphSlide3_1);
    adressSlide3Element.appendChild(paragraphSlide3_2);

    return adressSlide3Element;
}

const createIconSlide3 = () => {
    const iconSlide3Element = document.createElement('i');
    iconSlide3Element.classList.add('fa-solid','fa-location-dot');

    return iconSlide3Element;
}

const createRestaurantSlide3Icon = () => {
    const slide3IconElement = document.createElement('div');
    slide3IconElement.classList.add('icon');

    const slide3Icon = createIconSlide3();

    slide3IconElement.appendChild(slide3Icon);

    return slide3IconElement;
}

const createRestaurantCarousselContentSlide3Details = () => {
    const slide3Details = document.createElement('div');
    slide3Details.classList.add('details');

    const iconSlide3 = createRestaurantSlide3Icon();
    const adressSlide3 = createRestaurantSlide3Adress();

    slide3Details.appendChild(iconSlide3);
    slide3Details.appendChild(adressSlide3);

    return slide3Details;
}

const createRestaurantCarousselContentSlide3Title = () => {
    const slide3Title = document.createElement('div');
    slide3Title.classList.add('title');
    slide3Title.textContent = 'Vila Pioneiro';

    return slide3Title;
}

const createRestaurantCarousselContentSlide3 = () => {
    const contentElement3 = document.createElement('div');
    contentElement3.classList.add('content');

    const titleSlide3 = createRestaurantCarousselContentSlide3Title();
    const detailsSlide3 = createRestaurantCarousselContentSlide3Details();

    contentElement3.appendChild(titleSlide3);
    contentElement3.appendChild(detailsSlide3);

    return contentElement3;
}

const createRestaurantCarousselImage3 = () => {
    const imageElement3 = document.createElement('img');
    imageElement3.src = '../assets/imgs/Vila Pioneiro.jpeg';
    imageElement3.alt = 'restaurante 3';

    return imageElement3;
}

const createRestaurantSlide3 = () => {
    const slide3Element = document.createElement('div');
    slide3Element.classList.add('slide');
    slide3Element.id = 'slide3';

    const image3 = createRestaurantCarousselImage3();
    const content3 = createRestaurantCarousselContentSlide3();

    slide3Element.appendChild(image3);
    slide3Element.appendChild(content3);

    return slide3Element;
}
//inicio do slide 2
const createSlide2AdressP2 = () => {
    const p2Slide2Element = document.createElement('p');
    p2Slide2Element.classList.add('number');
    p2Slide2Element.textContent = '740';

    return p2Slide2Element;
}

const createSlide2AdressP1 = () => {
    const p1Slide2Element = document.createElement('p');
    p1Slide2Element.classList.add('street');
    p1Slide2Element.textContent = 'Rua Rodrigues Alves';

    return p1Slide2Element;
}

const createRestaurantSlide2Adress = () => {
    const adressSlide2Element = document.createElement('div');
    adressSlide2Element.classList.add('address');

    const paragraphSlide2_1 = createSlide2AdressP1();
    const paragraphSlide2_2 = createSlide2AdressP2();

    adressSlide2Element.appendChild(paragraphSlide2_1);
    adressSlide2Element.appendChild(paragraphSlide2_2);

    return adressSlide2Element;
}

const createIconSlide2 = () => {
    const iconSlide2Element = document.createElement('i');
    iconSlide2Element.classList.add('fa-solid','fa-location-dot');

    return iconSlide2Element;
}

const createRestaurantSlide2Icon = () => {
    const slide2IconElement = document.createElement('div');
    slide2IconElement.classList.add('icon');

    const slide2Icon = createIconSlide2();

    slide2IconElement.appendChild(slide2Icon);

    return slide2IconElement;
}

const createRestaurantCarousselContentSlide2Details = () => {
    const slide2Details = document.createElement('div');
    slide2Details.classList.add('details');

    const iconSlide2 = createRestaurantSlide2Icon();
    const adressSlide2 = createRestaurantSlide2Adress();

    slide2Details.appendChild(iconSlide2);
    slide2Details.appendChild(adressSlide2);

    return slide2Details;
}

const createRestaurantCarousselContentSlide2Title = () => {
    const slide2Title = document.createElement('div');
    slide2Title.classList.add('title');
    slide2Title.textContent = 'Jd. Coopagro';

    return slide2Title;
}

const createRestaurantCarousselContentSlide2 = () => {
    const contentElement2 = document.createElement('div');
    contentElement2.classList.add('content');

    const titleSlide2 = createRestaurantCarousselContentSlide2Title();
    const detailsSlide2 = createRestaurantCarousselContentSlide2Details();

    contentElement2.appendChild(titleSlide2);
    contentElement2.appendChild(detailsSlide2);

    return contentElement2;
}

const createRestaurantCarousselImage2 = () => {
    const imageElement2 = document.createElement('img');
    imageElement2.src = '../assets/imgs/Jd. Coopagro.jpeg';
    imageElement2.alt = 'restaurante 2';

    return imageElement2;
}

const createRestaurantSlide2 = () => {
    const slide2Element = document.createElement('div');
    slide2Element.classList.add('slide');
    slide2Element.id = 'slide2';

    const image2 = createRestaurantCarousselImage2();
    const content2 = createRestaurantCarousselContentSlide2();

    slide2Element.appendChild(image2);
    slide2Element.appendChild(content2);

    return slide2Element;
}
//inicio do slide 1
const createSlide1AdressP2 = () => {
    const p2Slide1Element = document.createElement('p');
    p2Slide1Element.classList.add('number');
    p2Slide1Element.textContent = '66';

    return p2Slide1Element;
}

const createSlide1AdressP1 = () => {
    const p1Slide1Element = document.createElement('p');
    p1Slide1Element.classList.add('street');
    p1Slide1Element.textContent = 'Rua Ângela Tonial';

    return p1Slide1Element;
}

const createRestaurantSlide1Adress = () => {
    const adressSlide1Element = document.createElement('div');
    adressSlide1Element.classList.add('address');

    const paragraph1 = createSlide1AdressP1();
    const paragraph2 = createSlide1AdressP2();

    adressSlide1Element.appendChild(paragraph1);
    adressSlide1Element.appendChild(paragraph2);

    return adressSlide1Element;
}

const createIconSlide1 = () => {
    const iconSlide1Element = document.createElement('i');
    iconSlide1Element.classList.add('fa-solid','fa-location-dot');

    return iconSlide1Element;
}

const createRestaurantSlide1Icon = () => {
    const slide1IconElement = document.createElement('div');
    slide1IconElement.classList.add('icon');

    const slide1Icon = createIconSlide1();

    slide1IconElement.appendChild(slide1Icon);

    return slide1IconElement;
}

const createRestaurantCarousselContentSlide1Details = () => {
    const slide1Details = document.createElement('div');
    slide1Details.classList.add('details');

    const iconSlide1 = createRestaurantSlide1Icon();
    const adressSlide1 = createRestaurantSlide1Adress();

    slide1Details.appendChild(iconSlide1);
    slide1Details.appendChild(adressSlide1);

    return slide1Details;
}

const createRestaurantCarousselContentSlide1Title = () => {
    const slide1Title = document.createElement('div');
    slide1Title.classList.add('title');
    slide1Title.textContent = 'Vila Paulista';

    return slide1Title;
}

const createRestaurantCarousselContentSlide1 = () => {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const titleSlide1 = createRestaurantCarousselContentSlide1Title();
    const detailsSlide1 = createRestaurantCarousselContentSlide1Details();

    contentElement.appendChild(titleSlide1);
    contentElement.appendChild(detailsSlide1);

    return contentElement;
}

const createRestaurantCarousselImage1 = () => {
    const imageElement1 = document.createElement('img');
    imageElement1.src = '../assets/imgs/restaurante_paulista_001_3.jpg';
    imageElement1.alt = 'restaurante 1';

    return imageElement1;
}

const createRestaurantSlide1 = () => {
    const slide1Element = document.createElement('div');
    slide1Element.classList.add('slide');
    slide1Element.id = 'slide1';

    const image1 = createRestaurantCarousselImage1();
    const content = createRestaurantCarousselContentSlide1();

    slide1Element.appendChild(image1);
    slide1Element.appendChild(content);

    return slide1Element;
}

const createRestaurantCarousselSlideAnimation = () => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('main-slide','slide-animation');

    const slideOne = createRestaurantSlide1();
    const slideTwo = createRestaurantSlide2();
    const slideThree = createRestaurantSlide3();
    const slideFour = createRestaurantSlide4();

    slideElement.appendChild(slideOne);
    slideElement.appendChild(slideTwo);
    slideElement.appendChild(slideThree);
    slideElement.appendChild(slideFour);

    return slideElement;
} 

const createRestaurantCaroussel = () => {
    const carousselElement = document.createElement('div');
    carousselElement.id = 'caroussel';

    const slide = createRestaurantCarousselSlideAnimation();

    carousselElement.appendChild(slide);

    return carousselElement;
}

const createRestaurantCarousselContainerSlideshow = () => {
    const carousselSlideshowElement = document.createElement('div');
    carousselSlideshowElement.classList.add('caroussel-container-slideshow');

    const carousselSlideshow = createRestaurantCaroussel();

    carousselSlideshowElement.appendChild(carousselSlideshow);

    return carousselSlideshowElement;
}

const createRestaurantCarousselContainer = () => {
    const carousselContainerElement = document.createElement('div');
    carousselContainerElement.classList.add('caroussel-container');

    const carousselRestaurant = createRestaurantCarousselContainerSlideshow();

    carousselContainerElement.appendChild(carousselRestaurant);
    
    return carousselContainerElement;
}

const restaurantTitleText = 'Restaurantes populares';

const createRestaurantHeading = () => {
    const headingElement = document.createElement('h2');
    headingElement.appendChild(
        document.createTextNode(restaurantTitleText),
    );

    return headingElement;
}

const createRestaurantIcon = () => {
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid','fa-utensils');

    return iconElement;
}
const createRestaurantHeader = () => {
    const headerElement = document.createElement('div');
    headerElement.classList.add('header');

    const icon = createRestaurantIcon();
    const headingRestaurant = createRestaurantHeading();

    headerElement.appendChild(icon);
    headerElement.appendChild(headingRestaurant);

    return headerElement;
}
const restaurants = () => {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('restaurants');

    const header = createRestaurantHeader();
    const caroussel = createRestaurantCarousselContainer();
    const loaderControl = createRestaurantCarousselControls();

    sectionElement.appendChild(header);
    sectionElement.appendChild(caroussel);
    sectionElement.appendChild(loaderControl);

    document.body.appendChild(sectionElement);
};

