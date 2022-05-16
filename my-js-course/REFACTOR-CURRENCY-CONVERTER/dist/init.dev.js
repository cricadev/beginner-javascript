"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _utils = require("./utils.js");

var _currencies = _interopRequireDefault(require("./currencies.js"));

var _handlers = require("./handlers.js");

var _elements = require("./elements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init() {
  var form = document.querySelector('.app form');
  var optionsHTML = (0, _utils.generateOptions)(_currencies["default"]);
  _elements.fromSelect.innerHTML = optionsHTML;
  _elements.toSelect.innerHTML = optionsHTML;
  form.addEventListener('input', _handlers.handleInput);
}