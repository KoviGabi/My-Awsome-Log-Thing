/////////////////////////////
///// UI nélküli Client /////
/////////////////////////////

var net = require('net');
var JsonData = require('../json/data.json');
//var file = require('../img/test.png'); //HIBA, valahogy máshogy kéne tárolni

var options = {port: 9999};

var client = net.createConnection(options);

client.on('connect', function() {

    client.write(JSON.stringify(JsonData));

    /*if(file != ""){            
        client.write(data);
        data = "";
    }
    else{
        client.write(logType + " " + logData);
    }*/

    client.end();
});

client.on('data', data => {
    client.end();
});