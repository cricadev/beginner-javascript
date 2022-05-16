"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnHi = returnHi;
exports["default"] = exports.middle = exports.last = void 0;
var last = 'bos';
exports.last = last;
var middle = 'slam dunk';
exports.middle = middle;

function returnHi(name) {
  return "hi ".concat(name, " ").concat(last);
}

var first = 'cricadev'; // NAMED exports - we can have as many as we want

var _default = first;
exports["default"] = _default;