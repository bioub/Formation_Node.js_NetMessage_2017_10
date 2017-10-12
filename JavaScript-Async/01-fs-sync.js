const fs = require('fs');
const path = require('path');

const log = (filePath, msg) => {
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
};

const dirPath = path.join(__dirname,  'logs');
const filePath = path.resolve(dirPath, 'app.log');

console.time('thread idle');
console.time('end');
try {
  const stat = fs.statSync(dirPath);
}
catch (err) {
  if (err.code === 'ENOENT') {
    fs.mkdirSync(dirPath)
  }
}

try {
  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
}
catch(err) {
  console.log(err.message);
}

console.log('Logs done');
console.timeEnd('thread idle');
console.timeEnd('end');