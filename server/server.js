const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: "anemailaddy2yahoo.com",
    //     text: "some email body",
    //     createdAt: new Date().getTime()
    // });

    // socket.on('createEmail', function(newEmail) {
    //     console.log('New email', newEmail);
    // });
    // socket.on('disconnect', () => {
    //     console.error('user was disconnected');
    // });

    socket.emit('newMessage', {
        from: "Oke",
        text: "hey",
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', function(message) {
        console.log('New Message', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    });


});

server.listen(port, () => {
    console.log('app started on port 3000');
});