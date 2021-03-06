const fs = require('fs');
const path = require('path');

const log = (filePath, msg, cb) => {
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

const dirPath = path.join(__dirname,  'logs');
const filePath = path.resolve(dirPath, 'app.log');

console.time('thread idle');
console.time('end');
fs.stat(dirPath, (err, stat) => {
  const next = () => {
    log(filePath, 'Ligne 1', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(filePath, 'Ligne 2', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(filePath, 'Ligne 3', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(filePath, 'Ligne 4', (err) => {
            if (err) {
              return console.log(err.message);
            }
            log(filePath, 'Ligne 5', (err) => {
              if (err) {
                return console.log(err.message);
              }
              console.log('Logs done');
              console.timeEnd('end');
            });
          });
        });
      });
    });
  }

  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, () => {
      next();
    });
  }
  next();
});
console.timeEnd('thread idle');