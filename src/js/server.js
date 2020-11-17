import * as json_handler from "./json_handler.js";
import * as base64_handler from "./base64_handler.js";
var net = require('net');

var server = net.createServer();
var data = "";

server.on('connection', function(socket) {

    var remoteAddress = socket.remoteAddress + ':' + socket.remotePort;
    console.log("New client from: " + remoteAddress);

    socket.on('data', function(d) {        
        data += d;        
    });
    socket.on('close', function() {

        DataHandler();

        data = "";
        console.log("Connection is closed with: " + remoteAddress);
    });
    socket.on('error', function(e) {
        console.log("Error: " + e.message);
    });
});

server.listen(9999, function(){
    console.log("Server is listening on: " + server.address());
});

function DataHandler(){    

    //Is it JSON?
    try {
        var data2 = JSON.parse(data);
        json_handler.json_handler(data2.malt_type, data2.malt_data);
    } catch (e) {
        console.log("Not JSON!")
        console.log(e);
    }

    //If not JSON, is it Base64 encoded?
    try {
        base64_handler.Base64_Handler(data);
    } catch (e) {
        console.log("Not base64 encoded file!")
        console.log(e);
    }

    //If not any of the above..
}