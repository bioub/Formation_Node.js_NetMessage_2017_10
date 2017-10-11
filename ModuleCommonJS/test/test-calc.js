const assert = require('assert');
const calc = require('../src/calc');

try {
  assert.deepEqual(calc.sum(1, 2), 3);

  console.log('Les tests de calc passent');
}
catch(err) {
  console.log('Les tests de calc echouent');
  console.log(err.message);
  process.exit(1);
}
