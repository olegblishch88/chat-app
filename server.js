var socketio = require('socket.io');
var io = socketio.listen(3636);

io.sockets.on('connection', function (socket) {
    socket.on('send', function (data) {
      io.sockets.emit('message', data);
    });
});