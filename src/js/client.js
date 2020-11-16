/////////////////////////////
///// UI nélküli Client /////
/////////////////////////////

var net = require('net');
var SQL_JSON = require('../json/sql.json');
var LOG_JSON = require('../json/log.json');
var ERROR_JSON = require('../json/error.json');
var EXCEPTION_JSON = require('../json/exception.json');
//var file = require('../img/test.png'); //HIBA, valahogy máshogy kéne tárolni

var options = {port: 9999};

var client = net.createConnection(options);

client.on('connect', function() {

    client.write(JSON.stringify(LOG_JSON));
    client.end();
});

client.on('data', data => {
    client.end();
});