const clockContainer = document.querySelector('.header__clock');
const updateClock = () => clockContainer.innerText = new Date().toLocaleDateString('uk');
setInterval(updateClock, 1000);

