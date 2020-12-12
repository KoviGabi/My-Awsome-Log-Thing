let LOG_JSON = require('../test_files/json/log.json');
let net = require('net');
let options = {port: 9999};
let client = net.createConnection(options);
let data = JSON.stringify(LOG_JSON);

client.on('connect', function(){
    client.write(data);
    client.end();
});