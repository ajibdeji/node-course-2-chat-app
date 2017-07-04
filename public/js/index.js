var socket = io();
socket.on('connect', function() {
    // console.info('connected to the server');

    // socket.emit('createEmail', {
    //     to: "anemailaddy2yahoo.com",
    //     text: "some email body for create",
    //     createdAt: new Date().getTime()
    // });

});
socket.on('disconnect', function() {
    console.error('disconnected to the server');
});


// socket.on('newEmail', function(email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function(message) {
    console.log('New Message', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: "User",
        text: $('#message-text').val()
    }, function(data) {
        console.log('got it', data);
    });
    $('#message-text').val('');

});

var locationButton = $('#send-location');

socket.on('newLocationMessage', function(message) {
    var li = $('<li></li>');
    var a = $('<a target="_blank">My location</a>');

    li.text(`${message.from}: `);;
    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li);
});
locationButton.on('click', function(e) {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your brwser');
    }
    navigator.geolocation.getCurrentPosition(function(position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        alert('geo location not available');
    });
});