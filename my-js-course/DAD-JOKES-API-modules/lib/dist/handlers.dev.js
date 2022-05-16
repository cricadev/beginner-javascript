"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClick = handleClick;

var _index = require("./index.js");

var _elements = require("../elements.js");

var _buttonText = _interopRequireDefault(require("../data/buttonText.js"));

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleClick() {
  var _ref, joke;

  return regeneratorRuntime.async(function handleClick$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _index.fetchJoke)(loader));

        case 2:
          _ref = _context.sent;
          joke = _ref.joke;
          _elements.jokeHolder.textContent = joke;
          _elements.jokeButtonSpan.textContent = (0, _utils.randomItemFromArray)(_buttonText["default"], _elements.jokeButtonSpan.textContent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}