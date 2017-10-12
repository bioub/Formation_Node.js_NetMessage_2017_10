const fs = require('fs');
const path = require('path');
const async = require('async');

const log = (filePath, msg, cb) => {
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

const dirPath = path.join(__dirname,  'logs');
const filePath = path.resolve(dirPath, 'app.log');

console.time('thread idle');
console.time('end');
fs.stat(dirPath, (err) => {
  const next = () => {
    async.series([
      (next) => log(filePath, 'Ligne 1', next),
      (next) => log(filePath, 'Ligne 2', next),
      (next) => log(filePath, 'Ligne 3', next),
      (next) => log(filePath, 'Ligne 4', next),
      (next) => log(filePath, 'Ligne 5', next),
    ], (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log('Logs done');
      console.timeEnd('end');
    });
  }

  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, () => {
      next()
    });
  }
  next();
});
console.timeEnd('thread idle');