"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRates = fetchRates;
exports.convert = convert;
var myHeaders = new Headers();
myHeaders.append('apikey', 'BIf5hKPnfNxARt99LH95sLB2742yc0Ze');
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
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