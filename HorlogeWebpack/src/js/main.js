'use strict';

//var Clock = require('./clock');
import Clock from './clock';

var clockElt = document.querySelector('.clock');
var clock = new Clock(clockElt);
clock.start();