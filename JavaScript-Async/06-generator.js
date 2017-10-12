

function *forEach(array) {
  for (let i=0; i<array.length; i++) {
    yield array[i];
  }
};

for (let nb of forEach([1, 2, 3, 4])) {
  console.log(nb);
}