const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


app.listen(port, () => {
    console.log('app started on port 3000');
});