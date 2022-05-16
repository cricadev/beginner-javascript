"use strict";

var jokeButton = document.querySelector('.getJoke');
var jokeButtonSpan = jokeButton.querySelector('.jokeText');
var jokeHolder = document.querySelector('.joke p');
var loader = document.querySelector('.loader');
var buttonText = ['ugh', '🤦‍♂️', 'omg dad', 'you are the worst', 'seriously', 'stop it.', 'please stop', 'that was the worst one'];

function fetchJoke() {
  var response, data;
  return regeneratorRuntime.async(function fetchJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // turn loader on
          loader.classList.remove('hidden');
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://icanhazdadjoke.com', {
            headers: {
              Accept: 'application/json'
            }
          }));

        case 3:
          response = _context.sent;
          data = response.json(); // turn the loader off

          loader.classList.add('hidden');
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function randomItemFromArray(arr, not) {
  var item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    console.log('ahh we used that one last time, look again');
    console.log(not);
    return randomItemFromArray(arr, not);
  }

  return item;
}

function handleClick() {
  var _ref, joke;

  return regeneratorRuntime.async(function handleClick$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchJoke());

        case 2:
          _ref = _context2.sent;
          joke = _ref.joke;
          jokeHolder.textContent = joke;
          jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

jokeButton.addEventListener('click', handleClick);
console.log(randomItemFromArray(buttonText));