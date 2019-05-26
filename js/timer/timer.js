"use strict";

const button = document.querySelector(".button");
const result = document.querySelector(".result");

const timeInMinutes = 5;
let currentTime;
let currentTimePlus;
let isPaused = false;
let timeLeft;
let timeInterval;

const timeRemaining = (currentTimePlus) => {
  const total = new Date(currentTimePlus).getTime() - Date.now();
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total: total,
    minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
    seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
  }
};

const runClock = () => {
  if (!isPaused) {
    currentTime = Date.now();
    currentTimePlus = new Date(currentTime + (timeInMinutes * 60 * 1000));
  } else {
    isPaused = false;
  }

  const updateClock = () => {
    const t = timeRemaining(currentTimePlus);
    if (t.seconds !== "0-1") {
      result.textContent = t.minutes + ":" + t.seconds;
    } else {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  timeInterval = setInterval(updateClock, 500);
}

const pauseClock = () => {
  if (!isPaused) {
    isPaused = true;
    clearInterval(timeInterval);
    button.innerHTML = "Resume Timer";
    timeLeft = timeRemaining(currentTimePlus).total;
  }
}

const resumeClock = () => {
  if (isPaused) {
    button.innerHTML = "Pause Timer";
    currentTimePlus = new Date(new Date().getTime() + timeLeft);
    runClock();
  }
}

button.addEventListener("click", () => !isPaused ? pauseClock() : resumeClock());
window.addEventListener("load", runClock);