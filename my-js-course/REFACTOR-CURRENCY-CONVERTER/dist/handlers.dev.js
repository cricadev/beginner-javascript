"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleInput = handleInput;

var _lib = require("./lib.js");

var _utils = require("./utils.js");

var _elements = require("./elements.js");

function handleInput(e) {
  var rawAmount;
  return regeneratorRuntime.async(function handleInput$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _lib.convert)(_elements.fromInput.value, _elements.fromSelect.value, _elements.toSelect.value));

        case 2:
          rawAmount = _context.sent;
          console.log(rawAmount);
          _elements.fromEl.textContent = (0, _utils.formatCurrency)(_elements.fromInput.value, _elements.fromSelect.value);
          _elements.toEl.textContent = (0, _utils.formatCurrency)(rawAmount, _elements.toSelect.value);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}