const net = require('net');

const server = net.createServer();

/*
server.on('listening', () => {
  console.log('Server started');
});
*/

server.on('connection', (socket) => {
  console.log('client connected');

  socket.on('data', (data) => {
    
  });

  socket.on('close', (data) => {
    console.log('client disconnected');
  });

  socket.pipe(process.stdout);
});

server.on('error', (err) => {
  if (err.code === 'EACCES') {
    console.log('Try to started as sudo');
  }
  else if (err.code === 'EONENT') {
    console.log('Try a different port');
  }
});

server.on('close', () => {
  console.log('close');
});

server.listen(1234, () => {
  console.log('Server started');
});