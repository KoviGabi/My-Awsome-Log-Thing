var net = require('net');
//var colors = require('colors');

var server = net.createServer();
var data = "";

server.on('connection', function(socket) {

    var remoteAddress = socket.remoteAddress + ':' + socket.remotePort;
    console.log("New client from: " + remoteAddress);

    socket.on('data', function(d) {        
        data += d;        
    });
    socket.on('close', function() {

        Show();

        data = "";
        console.log("Connection is closed with: " + remoteAddress);
    });
    socket.on('error', function(err) {
        console.log("Error: " + err.message);
    });
});

server.listen(9999, function(){
    console.log("Server is listening on: " + server.address());
});

function Show(){    
    try {
        var data2 = JSON.parse(data);
        console.log(data2);
        /////// +JSON Handler kell
    } catch (e) {
        console.log(e);
    }

    //Base64 File Handler
    try {
        var imgData = data.split(",");
        var header = imgData[0].split(":");
        var type = header[1].split(";");        
        imgData = imgData[1];
        var typeOfFile = type[0];
        var image = typeOfFile.split('/');

        //Kép megjelenítése, ha bármilyen kép kiterjesztésű a fájl.
        if(image[0] == "image"){
            //Kép megjelenítése
            var newImage = document.createElement('img');
            newImage.src = data;
            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        }
        
        //Videó megjelenítése. MKV-vel nem működik, MP4-el igen.
        else if(image[0] == "video"){
            //Videó megjelenítése
            document.getElementById("videoTest").innerHTML = "<video width='320' height='240' controls><source src='" + data + "' type='" + typeOfFile + "'></video>"
        }
        /*else if(image[0] == "audio"){
        }*/
    } catch (e) {
        console.log(e);
    }
}