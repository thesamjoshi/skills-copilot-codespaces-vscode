// Create web server
var express = require('express');
var app = express();
// Create server
var server = require('http').createServer(app);
// Create socket.io
var io = require('socket.io')(server);
// Create comments array
var comments = [];
// Create socket.io connection
io.on('connection', function(client) {
    // Send comments to client
    client.emit('comments', comments);
    // Receive new comment
    client.on('comment', function(comment) {
        // Add comment to array
        comments.push(comment);
        // Send comments to all clients
        io.emit('comments', comments);
    });
});
// Start server
server.listen(3000, function() {
    console.log('Server started');
});