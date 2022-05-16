"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro'
};
var myHeaders = new Headers();
myHeaders.append('apikey', 'BIf5hKPnfNxARt99LH95sLB2742yc0Ze');
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
var form = document.querySelector('.app form');
var fromInput = document.querySelector("[name=\"from_amount\"]");
var fromSelect = document.querySelector("[name='from_currency']");
var toSelect = document.querySelector("[name='to_currency']");
var toEl = document.querySelector('.to_amount');
var endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
var ratesByBase = {};

function fetchRates() {
  var base,
      response,
      rates,
      _args = arguments;
  return regeneratorRuntime.async(function fetchRates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          base = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'USD';
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(endpoint, "?base=").concat(base), requestOptions));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          rates = _context.sent;
          return _context.abrupt("return", rates);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function convert(amount, from, to) {
  var rates, rate, convertedAmount;
  return regeneratorRuntime.async(function convert$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (ratesByBase[from]) {
            _context2.next = 7;
            break;
          }

          console.log("oh no, we don't have ".concat(from, " rates to convert to ").concat(to, ". so let's go get it"));
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetchRates(from));

        case 4:
          rates = _context2.sent;
          console.log(rates); // store them for next time

          ratesByBase[from] = rates;

        case 7:
          // convert that amount that they passed it
          rate = ratesByBase[from].rates[to];
          convertedAmount = rate * amount;
          console.log("".concat(amount, " ").concat(from, " is ").concat(convertedAmount, " in ").concat(to));
          return _context2.abrupt("return", convertedAmount);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

function handleInput(e) {
  var rawAmount;
  return regeneratorRuntime.async(function handleInput$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(convert(fromInput.value, fromSelect.value, toSelect.value));

        case 2:
          rawAmount = _context3.sent;
          console.log(rawAmount);
          toEl.textContent = formatCurrency(rawAmount, toSelect.value);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

form.addEventListener('input', handleInput);

function generateOptions(options) {
  return Object.entries(options).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        currencyCode = _ref2[0],
        currencyName = _ref2[1];

    return "<option value=\"".concat(currencyCode, "\">").concat(currencyCode, " - ").concat(currencyName, "</option>");
  }).join('');
}

var optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML; // fetch(
//   `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));