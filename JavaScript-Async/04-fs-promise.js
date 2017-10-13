const fs = require('fs');
const path = require('path');
const util = require('util');

const log = (filePath, msg) => {
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  });
};

const dirPath = path.join(__dirname,  'logs');
const filePath = path.resolve(dirPath, 'app.log');

// Sinon utiliser fs-extra
const statPromise = util.promisify(fs.stat); // Node 8
const mkdirPromise = util.promisify(fs.mkdir);

console.time('thread idle');
console.time('end');
statPromise(dirPath)
  .catch((err) => {
    if (err && err.code === 'ENOENT') {
      return mkdirPromise(dirPath);
    }
    return Promise.reject(err);
  })
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => {
    console.log('Logs done');
    console.timeEnd('end');
  })
  .catch((err) => {
    console.log(err.message);
  });
console.timeEnd('thread idle');
  
  

