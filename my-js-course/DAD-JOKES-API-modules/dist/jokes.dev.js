"use strict";

var _handlers = require("./lib/handlers.js");

var jokeButton = document.querySelector('.getJoke');
var jokeButtonSpan = jokeButton.querySelector('.jokeText');
var jokeHolder = document.querySelector('.joke p');
var loader = document.querySelector('.loader');
jokeButton.addEventListener('click', _handlers.handleClick);