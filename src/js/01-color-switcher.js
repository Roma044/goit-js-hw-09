function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
let timerId = null;
btnStopEl.disabled = true;

const btnClickStart = () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
};

const btnClickStop = () => {
  clearInterval(timerId);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
};

btnStartEl.addEventListener('click', btnClickStart);
btnStopEl.addEventListener('click', btnClickStop);
