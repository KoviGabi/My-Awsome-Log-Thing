let net = require('net');
let options = {port: 9999};

export function SendData(srcData){
    let client = net.createConnection(options);
    client.on('connect', function(){
        if(srcData != ""){            
            client.write(srcData);
        }
        client.end();
    });
}