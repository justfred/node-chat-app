var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'recipient@where.com',
  //   text: 'Back atcha',
  //   subject: 'whatever'
  // });

  socket.emit('createMessage', {
    from: 'recipient@where.com',
    text: 'Back atcha'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
