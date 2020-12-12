import {Handler} from "./handler.js";

let net = require('net');
let server = net.createServer();
let data = "";

server.on('connection', function(socket) {
    socket.on('data', function(d){    
        data += d;
    });
    socket.on('close', function(){
        Handler(data);
        data = "";
    });
    socket.on('error', function(e){
        console.log("Error: " + e.message);
    });
}).listen(9999);