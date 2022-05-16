import { fetchJoke } from './lib/index.js';
import { jokeButton, jokeButtonSpan, jokeHolder } from './elements.js';
import buttonText from './buttonText.js';
import { randomItemFromArray } from './utils.js';

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
jokeButton.addEventListener('click', handleClick);
