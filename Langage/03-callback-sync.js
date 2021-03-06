// ES5.1
const nbs = [3, 4, 5];

nbs.forEach(function(nb, i) {
   console.log(nb, i);
});

const nbsDoublees = nbs.map(function(nb, i) {
  return nb * 2;
});

console.log(nbsDoublees.join(' - '));

const forEach = function(array, cb) {
  for (let i=0; i<array.length; i++) {
    cb(array[i], i, array);
  }
};

forEach(nbs, function(nb, i) {
  console.log(nb, i);
});

const setTimeoutSync = function(cb, delay) {
  const debut = Date.now();

  while (Date.now() < debut + delay) {}

  cb();
};

setTimeoutSync(function() {
  console.log('200ms');
}, 200);

// [3, 4, 5]
// 0 + 3 = 3;
// 3 + 4 = 7;
// 7 + 5 = 12;
const sum = nbs.reduce(function(acc, nb) {
  return acc + nb;
}, 0);
console.log(sum);

console.log('after callback sync');
