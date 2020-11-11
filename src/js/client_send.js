var net = require('net');
var options = {port: 9999};

var data = "";
var logType;
var logData;

window.getType = function getType(){
    logType = document.getElementById("logType").value;
    console.log(logType);
}

window.getData = function getData(){
    logData = document.getElementById("logData").value;
    console.log(logData);
}
window.Send = function Send(){
    sendData();
}

export function getPath(dataData){
    data = dataData;
    sendData();
}
function sendData(){    
    var client = net.createConnection(options);
    client.on('connect', function() {
    
    
    //console.log(data);
    //console.log(type);

        /*var text2 = data;
        var buff = new Buffer.from(text2);
        var base64data = buff.toString('base64');*/
        
        //console.log('"' + text + " " + text2 + '" converted to Base64 is "' + base64type + '"');
        //client.write(base64type + "/" + base64data);


        ////
        ////JSON-ba type, length, data, time
        ////


        if(data != ""){            
            client.write(data);
            console.log(data);
            data = "";
        }
        else{
            client.write(logType + " " + logData)
            console.log(logType + " " + logData);
        }
        client.end();
    });
    
    client.on('data', data => {
        //console.log(data.toString());
        client.end();
    });
}