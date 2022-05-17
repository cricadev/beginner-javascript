"use strict";

var _waait = _interopRequireDefault(require("waait"));

var _faker = require("@faker-js/faker");

var _dateFns = require("date-fns");

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

var _awaitToJs = _interopRequireDefault(require("await-to-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fakeNames = Array.from({
  length: 10
}, function () {
  return "".concat(_faker.faker.name.firstName(), " ").concat(_faker.faker.name.lastName());
});
console.log(fakeNames);
console.log("hello ".concat(_faker.faker.name.firstName()));

function go() {
  return regeneratorRuntime.async(function go$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('going');
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _waait["default"])(200));

        case 3:
          console.log('ending');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

go();
var diff = (0, _dateFns.formatDistance)(new Date(1986, 3, 4, 11, 32, 0), new Date(2020, 3, 4, 10, 32, 0), {
  addSuffix: true
}); //= > 'in ab 1 hour

console.log(diff);
var date = new Date(); // JANAUARY THE 12TH 2022

var formatted = (0, _dateFns.format)(date, "LLLL 'the' do y");
console.log(formatted);

function getJoke() {
  var _ref, data;

  return regeneratorRuntime.async(function getJoke$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('https://icanhazdadjoke.com', {
            headers: {
              Accept: 'application/json'
            }
          }));

        case 2:
          _ref = _context2.sent;
          data = _ref.data;
          console.log(data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

getJoke();
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [5, 3, 8, 3, 7, 453, 543];
var sameValues = (0, _lodash.intersection)(a, b);
console.log(sameValues);
var person1 = {
  name: 'Cris'
};
var person2 = {
  name: 'Cris'
};
console.log((0, _lodash.isEqual)(person1, person2));

function checkIfNameIsCool(name) {
  return new Promise(function (resolve, reject) {
    if (name === 'Wes') {
      resolve('cool Name');
      return;
    }

    reject(new Error('Bad name'));
  });
}

function checkName() {
  var response;
  return regeneratorRuntime.async(function checkName$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _awaitToJs["default"])(checkIfNameIsCool('Cris')));

        case 2:
          response = _context3.sent;
          console.log(response);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

checkName();