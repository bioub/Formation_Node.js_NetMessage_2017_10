const http = require('http');
const mongoose = require('mongoose');
// const https = require('https');
// const http2 = require('http2');
const app = require('./app');
const config = require('./config');

const mongoUri = `mongodb://${config.mongo.host}/${config.mongo.db}`;
mongoose.connect(mongoUri, {
  useMongoClient: true,
});

const server = http.createServer(app);
// const serverHttp2 = http2.createServer(app);
//const securedServer = https.createServer(app, {
//  cert: 'my-cert.pem'
//});

server.on('error', (err) => {
  if (err.code === 'EACCES') {
    console.log('Try to started as sudo');
  }
  else if (err.code === 'EADDRINUSE') {
    console.log('Try a different port');
  }
  else {
    console.log('Other error : ' + err.message);
  }
});

server.listen(config.port, () => {
  console.log('Server started');
  console.log(`http://localhost:${config.port}`);
});
