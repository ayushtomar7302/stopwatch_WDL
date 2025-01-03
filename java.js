let startButton = document.getElementById('startStop');
let display = document.getElementById('display');
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startButton.textContent = 'Start';
        startButton.classList.remove('stop');
    } else {
        timer = setInterval(updateTime, 1000);
        startButton.textContent = 'Stop';
        startButton.classList.add('stop');
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
    startButton.textContent = 'Start';
    startButton.classList.remove('stop');
}
