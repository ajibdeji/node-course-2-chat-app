var socket = io();
socket.on('connect', function() {
    // console.info('connected to the server');

    // socket.emit('createEmail', {
    //     to: "anemailaddy2yahoo.com",
    //     text: "some email body for create",
    //     createdAt: new Date().getTime()
    // });


    socket.emit('createMessage', {
        to: "oke",
        text: "hi"
    });



});
socket.on('disconnect', function() {
    console.error('disconnected to the server');
});

// socket.on('newEmail', function(email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});