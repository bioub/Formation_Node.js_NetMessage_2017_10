'use strict';

var Clock = require('./clock');

var clockElt = document.querySelector('.clock');
var clock = new Clock(clockElt);
clock.start();