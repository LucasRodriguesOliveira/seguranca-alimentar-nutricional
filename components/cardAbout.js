const createIconCard = () => {
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid','fa-arrow-right');

    return iconElement;
}

const createButtonCard = () => {
    const verMaisElement = document.createElement('a');
    verMaisElement.classList.add('btn','see-more');
    verMaisElement.href = 'sobre.html';
    verMaisElement.textContent = 'Ver Mais ';

    const icon = createIconCard();

    verMaisElement.appendChild(icon);

    return verMaisElement;
}

const createParagraphCard = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('details');
    paragraphElement.textContent = 'A realização do direito de todos ao acesso regular e permanente a alimentos de qualidade, em quantidade suficiente, sem comprometer o acesso a outras necessidades essenciais, tendo como base práticas alimentares promotoras de saúde, que respeitem a diversidade cultural e que sejam social, econômica e ambientalmente sustentáveis';

    return paragraphElement;
}

const createSubtitleCard = () => {
    const subtitleElement = document.createElement('h2');
    subtitleElement.classList.add('quote');
    subtitleElement.textContent = '"Qualidade de vida através da alimentação saudável"';

    return subtitleElement;
}

const createTitleCard = () => {
    const titleElement = document.createElement('h1');
    titleElement.classList.add('title');
    titleElement.textContent = 'Segurança Alimentar e Nutricional';

    return titleElement;
}

const cardAboutn = () => {
    const sectionElement = document.createElement('section');
    sectionElement.id = 'card-about';

    const title = createTitleCard();
    const subtitle = createSubtitleCard();
    const paragraph = createParagraphCard();
    const button = createButtonCard();

    sectionElement.appendChild(title);
    sectionElement.appendChild(subtitle);
    sectionElement.appendChild(paragraph);
    sectionElement.appendChild(button);

    document.body.appendChild(sectionElement);
};
