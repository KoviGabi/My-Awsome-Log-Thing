import {HandlerSelector} from "./handler_selector.js";

var net = require('net');
var server = net.createServer();
var data = "";

server.on('connection', function(socket) {
    socket.on('data', function(d){    
        data += d;
    });
    socket.on('close', function(){
        HandlerSelector();
        data = "";
    });
    socket.on('error', function(e){
        console.log("Error: " + e.message);
    });
}).listen(9999);