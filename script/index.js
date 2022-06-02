const changeSerhio = document.querySelector('.sergio__common');
const sergioCongratulation = document.querySelector('.congratulations__text');

let i = 1;
const classNameDefault = 'sergio__common_random_';
let className = classNameDefault + i;

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function makeSerhioRandom() {
    changeSerhio.textContent = '';
    changeSerhio.classList.remove(className);
    i = randomInteger(1, 10)
    className = classNameDefault + i;
    changeSerhio.classList.add(className);
}

function makeCongratulationSpanish() {
    sergioCongratulation.textContent = 'Feliz cumpleaños, Serguéi!';
}

function makeCongratulationItalian() {
    sergioCongratulation.textContent = 'Buon compleanno, Sergio!';
}

function makeCongratulationEnglish() {
    sergioCongratulation.textContent = 'Happy birthday, Sergei!';
}

function makeCongratulationGerman() {
    sergioCongratulation.textContent = 'Alles Gute zum Geburtstag, Sergej!';
}

function makeCongratulationChinise() {
    sergioCongratulation.textContent = '生日快乐，塞尔吉!';
}

function makeCongratulationUkranian() {
    sergioCongratulation.textContent = 'З днем народження, Сергію!';
}

function makeCongratulationFranch() {
    sergioCongratulation.textContent = 'Joyeux anniversaire, Sergueï!';
}

function makeCongratulationRussian() {
    sergioCongratulation.textContent = 'С днем рождения, Сергей!';
}

function makeCongratulationRandom() {
    setTimeout(makeCongratulationSpanish, 3000);
    setTimeout(makeCongratulationItalian, 6000);
    setTimeout(makeCongratulationEnglish, 9000);
    setTimeout(makeCongratulationGerman, 12000);
    setTimeout(makeCongratulationChinise, 15000);
    setTimeout(makeCongratulationUkranian, 18000);
    setTimeout(makeCongratulationFranch, 21000);
    setTimeout(makeCongratulationRussian, 24000);
}

makeCongratulationRandom();

setInterval(makeCongratulationRandom, 24000);

changeSerhio.addEventListener('click', makeSerhioRandom);