
setTimeout(function() {
  console.log('200ms')
}, 200);

setTimeout(function() {
  console.log('100ms')
}, 100);

const forEachAsync = function(array, cb) {
  for (let i=0; i<array.length; i++) {
    process.nextTick(cb, array[i], i, array);
  }
};

forEachAsync([1, 2, 3], function(nb) {
  console.log(nb);
});

console.log('after setTimeout');
