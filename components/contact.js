const createIconWhatsApp = () => {
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-brands', 'fa-whatsapp');
    return iconElement;
}

const createParagraphWhatsApp = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = '(99) 99999-9999';
    return paragraphElement;
}

const createContactItemWhatsApp = () => {
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-item', 'whatsapp');

    const icon = createIconWhatsApp();
    const text = createParagraphWhatsApp();

    contactItem.appendChild(icon);
    contactItem.appendChild(text);

    return contactItem;
}

const createIconEmail = () => {
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid', 'fa-envelope');
    return iconElement;
}

const createParagraphEmail = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'email@somemail.com';
    return paragraphElement;
}

const createContactItemEmail = () => {
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-item', 'email');

    const icon = createIconEmail();
    const text = createParagraphEmail();

    contactItem.appendChild(icon);
    contactItem.appendChild(text);

    return contactItem;
}

const createIconAddress = () => {
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid', 'fa-location-dot');
    return iconElement;
}

const createParagraphAddress = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'Rua Lorem ipsum, 250, Toledo, PR';
    return paragraphElement;
}

const createContactItemAddress = () => {
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-item', 'address');

    const icon = createIconAddress();
    const text = createParagraphAddress();

    contactItem.appendChild(icon);
    contactItem.appendChild(text);

    return contactItem;
}

const createContactsList = () => {
    const contactsList = document.createElement('ul');
    contactsList.classList.add('contacts-list');

    const item1 = createContactItemWhatsApp();
    const item2 = createContactItemEmail();
    const item3 = createContactItemAddress();

    contactsList.appendChild(item1);
    contactsList.appendChild(item2);
    contactsList.appendChild(item3);

    return contactsList;
}

const createTitleContact = () => {
    const titleElement = document.createElement('h2');
    titleElement.classList.add('title');
    titleElement.textContent = 'Entre em contato';
    return titleElement;
}

const createCardContact = () => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const title = createTitleContact();
    const contactsList = createContactsList();

    cardElement.appendChild(title);
    cardElement.appendChild(contactsList);

    return cardElement;
}

const contact = () => {
    const contactElement = document.createElement('section');
    contactElement.id = 'contact';

    const card = createCardContact();

    contactElement.appendChild(card);

    document.body.appendChild(contactElement);
}
