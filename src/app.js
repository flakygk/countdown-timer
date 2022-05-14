const daysElem    = document.getElementById('days');
const hoursElem   = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');

const finalDate   = new Date(2022, 6, 26);

setInterval(timer, 1000);

function timer() {
  const milliseconds = finalDate - new Date();

  if (milliseconds < 0) return;
  
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
  const hours   = Math.floor(milliseconds / 1000 / 60 / 60) % 24;
  const days    = Math.floor(milliseconds / 1000 / 60 / 60 / 24) % (24 * 60 * 60 * 1000);
  
  daysElem.textContent    = Math.floor(days / 10) ? days : '0' + days;
  hoursElem.textContent   = Math.floor(hours / 10) ? hours : '0' + hours;
  minutesElem.textContent = Math.floor(minutes / 10) ? minutes : '0' + minutes;
  secondsElem.textContent = Math.floor(seconds / 10) ? seconds : '0' + seconds;
}
