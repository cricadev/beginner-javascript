"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loader = exports.jokeHolder = exports.jokeButtonSpan = exports.jokeButton = void 0;
var jokeButton = document.querySelector('.getJoke');
exports.jokeButton = jokeButton;
var jokeButtonSpan = jokeButton.querySelector('.jokeText');
exports.jokeButtonSpan = jokeButtonSpan;
var jokeHolder = document.querySelector('.joke p');
exports.jokeHolder = jokeHolder;
var loader = document.querySelector('.loader');
exports.loader = loader;