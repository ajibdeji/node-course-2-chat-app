const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');


    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));;

    socket.on('createMessage', (theMessage, callback) => {
        console.log('New Message', theMessage);
        io.emit('newMessage', generateMessage(theMessage.from, theMessage.text));
        callback('this is from the server');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })
    });
    // var loc = 'https://www.google.ca/maps/@43.7269521,-79.5931739,16z';
    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });


});

server.listen(port, () => {
    console.log('app started on port 3000');
});