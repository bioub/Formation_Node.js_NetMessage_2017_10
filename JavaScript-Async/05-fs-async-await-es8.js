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

const statPromise = util.promisify(fs.stat); // Node 8
const mkdirPromise = util.promisify(fs.mkdir);

console.time('thread idle');
console.time('end');

(async function() {
  try {
    const stat = await statPromise(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      await mkdirPromise(dirPath);
    }
  }
  
  try {
    await log(filePath, 'Ligne 1');
    await log(filePath, 'Ligne 2');
    await log(filePath, 'Ligne 3');
    await log(filePath, 'Ligne 4');
    await log(filePath, 'Ligne 5');

    console.log('Logs done');
    console.timeEnd('end');
  }
  catch(err) {
    console.log(err.message);
  }
}());

console.timeEnd('thread idle');
  
  

