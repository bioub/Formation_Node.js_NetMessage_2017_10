'use strict';

// Random functions from MDN :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

module.exports.getRandom = function() {
  return Math.random();
};

module.exports.getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
};

module.exports.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
