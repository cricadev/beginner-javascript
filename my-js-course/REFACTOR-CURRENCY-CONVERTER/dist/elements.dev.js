"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEl = exports.fromEl = exports.toSelect = exports.fromSelect = exports.fromInput = void 0;
var fromInput = document.querySelector("[name=\"from_amount\"]");
exports.fromInput = fromInput;
var fromSelect = document.querySelector("[name='from_currency']");
exports.fromSelect = fromSelect;
var toSelect = document.querySelector("[name='to_currency']");
exports.toSelect = toSelect;
var fromEl = document.querySelector('.displayInput');
exports.fromEl = fromEl;
var toEl = document.querySelector('.to_amount');
exports.toEl = toEl;