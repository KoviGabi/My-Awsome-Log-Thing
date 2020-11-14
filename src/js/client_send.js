var net = require('net');

var options = {port: 9999};
var data = "";

export function getData(srcData){
    data = srcData;
    sendData();
}
function sendData(){
    var client = net.createConnection(options);
    client.on('connect', function() {
        if(data != ""){            
            client.write(data);
            console.log(data);
            data = "";
        }
        client.end();
    });
    
    client.on('data', data => {
        client.end();
    });
}