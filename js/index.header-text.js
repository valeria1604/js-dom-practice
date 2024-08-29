const headerTitle = document.querySelector('.header__title');
headerTitle.innerText = 'Hello there js';

const greetings = [
    'HELLO!',
    'HI!',
    'HOLA!',
    'GREETINGS',
    'ВІТАЮ!',
    'ПРИВІТ!'
]

const randomElement = (arr) => arr[ Math.floor(Math.random() * arr.length) ];
headerTitle.innerText = randomElement(greetings);

