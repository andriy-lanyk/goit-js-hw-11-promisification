const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let timerID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStart.addEventListener('click', changeBodyColor);

btnStop.addEventListener('click', stopChangeBodyColor);

function changeBodyColor() {
    document.body.style.backgroundColor = `${changeColor(colors)}`;
    btnStart.setAttribute("disabled", true)
    timerID = setTimeout(changeBodyColor, 1000);
};

function changeColor(colors) {
    return colors[randomIntegerFromInterval(0, colors.length - 1)];
};

function stopChangeBodyColor() {
    clearTimeout(timerID);
    btnStart.removeAttribute("disabled")
}