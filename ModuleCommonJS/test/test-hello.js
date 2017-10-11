const assert = require('assert');
const hello = require('../src/hello');

try {
  assert.deepEqual(hello('Romain'), 'Bonjour Romain');

  console.log('Les tests de hello passent');
}
catch(err) {
  console.log('Les tests de hello echouent');
  console.log(err.message);
  process.exit(1);
}
