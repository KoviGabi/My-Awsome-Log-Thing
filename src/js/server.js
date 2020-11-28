import * as json_handler from "./json_handler.js";
import * as base64_handler from "./base64_handler.js";
import * as unknown_handler from "./unknown_handler.js";
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

        HandlerSelector();

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

function HandlerSelector(){
    if (DataHandler("Not JSON!", "JSON")) {
        if (DataHandler("Not base64 encoded media file!", "base64")) {
            DataHandler("Too big and not handled file format!", "else");
        }
    }
}
function DataHandler(exception_msg, handler){
    try {
        switch (handler) {
            case "JSON":
                var jsonData = JSON.parse(data);
                json_handler.json_handler(jsonData.malt_type, jsonData.malt_data);
                break;
            case "base64":
                base64_handler.Base64_Handler(data);
                break;
            case "else":
                unknown_handler.Unknown_Handler(data);
                break;
            default:
                break;
        }
        return false;
    } catch (e) {
        console.log(exception_msg);
        console.log(e);
        return true;
    }
}