const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

//new express app
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//publish the default path to public directory
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage', {
  //   from: 'mike@example.com',
  //   text: 'Wazzup',
  //   createdAt: 123
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });

});

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
