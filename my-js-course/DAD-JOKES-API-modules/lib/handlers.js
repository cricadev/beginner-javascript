import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButtonSpan } from './elements.js';
import buttonText from '../data/buttonText.js';
import { randomItemFromArray } from './utils.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}