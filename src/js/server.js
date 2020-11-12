var net = require('net');
//var colors = require('colors');

var server = net.createServer();
var data = "";

server.on('connection', function(socket) {

    var remoteAddress = socket.remoteAddress + ':' + socket.remotePort;
    console.log("New client from: " + remoteAddress);
    
    socket.on('data', function(d) {
        
        data += d;
        //console.log(d);
        console.log(data.length);
        //console.log(typeof(data));

        var imgData = data.split(",");
        var header = imgData[0].split(":");
        var type = header[1].split(";");
        
        console.log("3");
        imgData = imgData[1];
        var typeOfFile = type[0];
        console.log(typeOfFile);
        var image = typeOfFile.split('/');
        console.log("2");
        //Kép megjelenítése, ha bármilyen kép kiterjesztésű a fájl.
        if(image[0] == "image"){                
            //Kép megjelenítése
            var newImage = document.createElement('img');
            newImage.src = data;
            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            console.log('1');
        }
        
        //console.log('New data from %s: %s'.blue, remoteAddress, d);
        //socket.write('Thanks the data:\r\n'.cyan + d + '\r\n');
    });
    socket.on('close', function() {
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