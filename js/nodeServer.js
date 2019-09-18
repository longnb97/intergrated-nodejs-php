var socket = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = socket.listen(server);

io.sockets.on('connection', function (client) {
	console.log("New client !");

	client.on('message', function (data) {
		console.log('Message received ' + data.name + ":" + data.message);

		//client.broadcast.emit( 'message', { name: data.name, message: data.message } );
		io.sockets.emit('message', { name: data.name, message: data.message });
	});

	client.on('say', function (data) {
		console.log('say: ', data)
		//client.broadcast.emit( 'message', { name: data.name, message: data.message } );
		io.sockets.emit('say-response', 'hi');
	});
});

server.listen(8080, () => console.log(`Server running at 8080`));