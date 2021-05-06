const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.body,
}

let isActive = false;
let intervalId = null;

refs.startBtn.addEventListener("click", () => {
    if (isActive) {
        return;
    }

    isActive = true;
    intervalId = setInterval(() => {
        changeBgColor();
    }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isActive = false;
})

const changeBgColor = () => {
    refs.body.setAttribute("bgColor", colors[randomIntegerFromInterval(0, colors.length - 1)])
};