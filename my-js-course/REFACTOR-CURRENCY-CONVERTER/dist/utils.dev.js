"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateOptions = generateOptions;
exports.formatCurrency = formatCurrency;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function generateOptions(options) {
  return Object.entries(options).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        currencyCode = _ref2[0],
        currencyName = _ref2[1];

    return "<option value=\"".concat(currencyCode, "\">").concat(currencyCode, " - ").concat(currencyName, "</option>");
  }).join('');
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}