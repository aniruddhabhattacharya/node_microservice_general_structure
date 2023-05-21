// socket.js
const socketIO = require('socket.io');

const configureSocket = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A new client connected');

    socket.on('chat message', (msg) => {
      console.log('Received message:', msg);
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
  });
};

module.exports = configureSocket;
