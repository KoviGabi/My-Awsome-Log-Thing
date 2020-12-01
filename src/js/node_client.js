var LOG_JSON = require('../test_files/json/log.json');
var net = require('net');
var options = {port: 9999};
var client = net.createConnection(options);
var data = JSON.stringify(LOG_JSON);

client.on('connect', function() {
    client.write(data);
    client.end();
});

////////////////////////////
/////// No UI Client ///////
////////////////////////////
