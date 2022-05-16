"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJoke = fetchJoke;

var _elements = require("../elements.js");

function fetchJoke() {
  var response, data;
  return regeneratorRuntime.async(function fetchJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // turn loader on
          _elements.loader.classList.remove('hidden');

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://icanhazdadjoke.com', {
            headers: {
              Accept: 'application/json'
            }
          }));

        case 3:
          response = _context.sent;
          data = response.json(); // turn the loader off

          _elements.loader.classList.add('hidden');

          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}