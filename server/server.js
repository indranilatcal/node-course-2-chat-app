const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey, what is going on?',
        createdAt: 123
    });
    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });
});

app.use(express.static(publicPath));

server.listen(port, () => console.log(`Server is up on port ${port}!`));
