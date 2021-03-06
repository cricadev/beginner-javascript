import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors.js';

const colorsEl = document.querySelector('.colors');
function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${isDark(color) ? 'dark' : ''}"
        id="${color}"
         style="background:${color}">${color}</span>`
    )
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if their browsers supports this;
  if (!('SpeechRecognition' in window)) {
    console.log('sorry your browser does not supportSpeechRecognition');
  }
  // it does work
  console.log('starting...');
  // make a new speech recognition
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
  console.log(recognition);
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
