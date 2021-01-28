 // initialize http server, socket.io and port number
const express = require('express');
var cors = require('cors');

const app = express();


const port = 3000;

app.use(cors);

const server = app.listen(port, function() {
    console.log('server running on port' + port);
});

const io = require('socket.io')(server);

let users = 1;

io.on('connection', (socket) => {
    console.log('connected in server.js  user = ' + users);
    users++;
    socket.on('message', (evt) => {
        console.log(evt);
        console.log("its me in server.js printing");

        socket.broadcast.emit('message', evt);
    });
});

io.on('disconnect', (evt) => {
    console.log('some people left');
});