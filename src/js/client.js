var net = require('net');
var options = {port: 9999};

export function SendData(srcData){
    var client = net.createConnection(options);
    client.on('connect', function(){
        if(srcData != ""){            
            client.write(srcData);
        }
        client.end();
    });
}