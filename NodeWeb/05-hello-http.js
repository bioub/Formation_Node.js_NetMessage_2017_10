const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/': 
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain');
      res.write('Hello');
      break;
    case '/presentation.html': 
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html; charset=utf-8');
      res.write('<h2>Présentation</h2>');
      break;
    case '/redirect': 
      res.statusCode = 302;
      res.setHeader('Location', 'http://www.google.fr/');
      break;
    case '/api/contacts': 
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify([{}, {}]));
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html');
      res.write('<h2>404 Not Found</h2>');
  }
  
  res.end();
});

server.on('error', (err) => {
  if (err.code === 'EACCES') {
    console.log('Try to started as sudo');
  }
  else if (err.code === 'EONENT') {
    console.log('Try a different port');
  }
});

server.listen(1234, () => {
  console.log('Server started');
});