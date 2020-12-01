////////////////////////////
/////// No UI Client ///////
////////////////////////////

var LOG_JSON = require('../test_files/json/log.json');
var net = require('net');
var options = {port: 9999};
var client = net.createConnection(options);

client.on('connect', function() {
    client.write(JSON.stringify(LOG_JSON));
    client.end();
});