"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var weather = new Promise(function (resolve) {
  setTimeout(function () {
    resolve({
      temp: 29,
      conditions: 'Sunny with Clouds'
    });
  }, 2000);
});
var tweets = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});
Promise.all([weather, tweets]).then(function (responses) {
  var _responses = _slicedToArray(responses, 2),
      weatherInfo = _responses[0],
      tweetInfo = _responses[1];

  console.log(weatherInfo, tweetInfo);
});
var postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
var streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');
Promise.all([postsPromise, streetCarsPromise]).then(function (responses) {
  return Promise.all(responses.map(function (res) {
    return res.json();
  }));
}).then(function (responses) {
  console.log(responses);
});