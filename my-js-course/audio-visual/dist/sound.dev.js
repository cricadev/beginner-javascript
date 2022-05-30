"use strict";

var WIDTH = 1500;
var HEIGHT = 1500;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;

function getAudio() {
  var stream;
  return regeneratorRuntime.async(function getAudio$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(navigator.mediaDevices.getUserMedia({
            audio: true
          }));

        case 2:
          stream = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}