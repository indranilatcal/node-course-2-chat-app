var socket = io();

socket.on('connect', function() {
    socket.emit('createMessage', {
        from: 'jen@example.com',
        text: 'This is from client.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server.');
});

socket.on('newMessage', function(message){
    console.log('New message:', message);
});