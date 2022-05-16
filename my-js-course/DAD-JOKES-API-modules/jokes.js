import { handleClick } from './lib/handlers.js';

const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

jokeButton.addEventListener('click', handleClick);
