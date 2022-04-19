import { getNumberOfChars } from './variations.js';

const answer1 = document.querySelector('#answer1');

const name = document.querySelector('#your-name');

name.addEventListener('keyup', () => {
  const value = name.value;

  answer1.textContent = getNumberOfChars(value);
});
