const fs = require('fs');

const ws = fs.createWriteStream(__dirname + '/out.txt');

ws.write('Coucou');
process.stdout.write('Coucou');

const rs = fs.createReadStream(__dirname + '/package.json');

rs.pipe(process.stdout);
// cat package.json | echo 