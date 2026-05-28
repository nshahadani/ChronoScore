let player1 = 0
let player2 = 0

const player1El = document.getElementById("player1")
const player2El = document.getElementById("player2")

function addPlayer1(points) {
    player1 += points
    player1El.textContent = player1
}

function addPlayer2(points) {
    player2 += points
    player2El.textContent = player2
}

function resetScores() {
    player1 = 0
    player2 = 0

    player1El.textContent = player1
    player2El.textContent = player2
}

let totalSeconds = 60;
let timerInterval = null;
let isTimerRunning = false;

const timerDisplayEl = document.getElementById("timer-display");
const timerBtnEl = document.getElementById("timer-btn");

function toggleTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        timerBtnEl.textContent = "START";
        isTimerRunning = false;
    } else {
        timerBtnEl.textContent = "PAUSE";
        isTimerRunning = true;
        timerInterval = setInterval(updateClock, 1000);
    }
}


function updateClock() {
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        timerDisplayEl.textContent = "0";
        timerBtnEl.textContent = "GAME OVER";
        isTimerRunning = false;
        return;
    }

    // Tick down by 1
    totalSeconds--;

    timerDisplayEl.textContent = totalSeconds;
}

function resetGame() {
    player1 = 0;
    player2 = 0;
    player1El.textContent = player1;
    player2El.textContent = player2;

    clearInterval(timerInterval);
    totalSeconds = 60;
    timerDisplayEl.textContent = "60";
    timerBtnEl.textContent = "START";
    isTimerRunning = false;
}