// DATA
// Массив поздравлений на разных языках.
const congratulations = [
  'Feliz cumpleaños, Serguéi!',
  'Buon compleanno, Sergio!',
  'Happy birthday, Sergei!',
  'Alles Gute zum Geburtstag, Sergej!',
  '生日快乐，塞尔吉!',
  'З днем народження, Сергію!',
  'Joyeux anniversaire, Sergueï!',
  'С днем рождения, Сергей!'
];

// CONSTANTS
// Выбираем элементы из DOM.
const sergioCongratulation = document.querySelector('.congratulations__text');
const serhioPhoto = document.querySelector('.sergio__common');
const buttonAutoplay = document.querySelector('.controls__button_type_autoplay');
const buttonAudioPlay = document.querySelector('.controls__button_type_audio');
const audioFile = document.querySelector('.audio');

// Задаем переменную для перебора массива поздравлений "congratulations".
let congratulationsIndex = 0;

// Задаем переменную для остановки слайдшоу.
let autoplayIntervalID;

// ACTIONS
// Возвращаем по очереди поздравление из массива.
function returnCongratulation(array) {
  if (congratulationsIndex < array.length) {
    sergioCongratulation.textContent = array[congratulationsIndex];
    congratulationsIndex += 1;
  } else {
    congratulationsIndex = 0;
    sergioCongratulation.textContent = array[congratulationsIndex];
    congratulationsIndex += 1;
  }
};

// Запускаем возврат поздравления из массива с интервалом в 3 секунды.
setInterval(() => returnCongratulation(congratulations), 3000);

// Выдаем случайное число из переданного диапазона. 
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверяем запущено ли слайдшоу. Да - останавливаем и запускаем ручной беребор.
// Нет - Только ручной перебор.
function checkSlideShowRunning() {
  if (buttonAutoplay.classList.contains('playing')) {
    stopSlideShow();
    makeSerhioRandom();
  } else {
    makeSerhioRandom();
  }
};

// Выдаем случайную фотографию, используя случайное число для формирования имени файла с фото.
function makeSerhioRandom() {
  serhioPhoto.textContent = '';
  serhioPhoto.style.backgroundImage = `url('images/sergio-${randomInteger(1, 87)}.png')`;
};

// Останавливаем слайдшоу из случайных фотографий
function stopSlideShow() {
  clearInterval(autoplayIntervalID);
  buttonAutoplay.classList.remove('playing');
  buttonAutoplay.textContent = 'Autoplay';
};

// Запускаем слайдшоу из случайных фотографий.
function toggleSlideShow() {
  if (buttonAutoplay.classList.contains('playing')) {
    stopSlideShow();
    serhioPhoto.textContent = 'Press me:)';
  } else {
    makeSerhioRandom();
    const intervalID = setInterval(makeSerhioRandom, 2000);
    buttonAutoplay.classList.add('playing');
    buttonAutoplay.textContent = 'Stop Autoplay';
    autoplayIntervalID = intervalID;
  }
};

// Вставляем в DOM аудио трек, запускаем его, скрываем кнопку включения аудио.
function playAudio() {
  audioFile.innerHTML = `<audio controls loop src="audio/allegrova-happy-birthday.mp3" class="controls__audio" autoplay></audio>`;
  audioFile.classList.remove('audio_hidden');
  buttonAudioPlay.classList.add('controls__button_audio_hidden');
};

// LISTENERS
// Кнопка ручного переключения фотографий.
serhioPhoto.addEventListener('click', checkSlideShowRunning);

// Кнопка автоматического переключения фотографий.
buttonAutoplay.addEventListener('click', toggleSlideShow);

// Кнопка включения аудио.
buttonAudioPlay.addEventListener('click', playAudio);
