const fs = require('fs');

fs.readFile(__dirname + '/package.json', (err, data) => {
  const objPackage = JSON.parse(data.toString());
  console.log(objPackage);
});