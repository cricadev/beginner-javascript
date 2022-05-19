import wait from 'waait';
import { isValidColor, isDark } from './colors';

let scoreSum = 0;
function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}
export async function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if it is a valid colours
  if (!isValidColor(color)) return;
  // if it is, then show the UI for that
  const colorSpan = document.getElementById(`${color}`);
  const score = document.querySelector('.score');
  const title = document.querySelector('.title');
  colorSpan.classList.add('got');
  console.log(colorSpan);
  console.log('This is a valid color!');
  console.log(color);
  // change color background
  document.body.style.background = `${color}`;
  console.log(isDark(color));
  if (isDark(color) === true) {
    score.classList.add('light');
    score.classList.remove('dark');
    title.classList.add('light');
    title.classList.remove('dark');
  } else {
    score.classList.add('dark');
    score.classList.remove('light');
    title.classList.add('dark');
    title.classList.remove('light');
  }

  await wait(350);
  score.textContent = `Score: ${(scoreSum += 1)}`;
  colorSpan.classList.add('none');
}
// high score keep score in local storage
// look in all of the words split each word and then loop in all of the words if it is
// remove all of the colors
