var net = require('net');
var JsonData = require('../json/data.json');

var options = {port: 9999};
var data = "";

//////////
//////////
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
//////////
//////////

export function getData(dataData){
    data = dataData;
    sendData();
}
function sendData(){
    var client = net.createConnection(options);
    client.on('connect', function() {
        
        //console.log(data);
        //console.log(type);

        console.log(JsonData);
        client.write(JsonData);
        /*if(data != ""){            
            client.write(data);
            console.log(data);
            data = "";
        }
        else{
            client.write(logType + " " + logData)
            console.log(logType + " " + logData);
        }*/
        client.end();
    });
    
    client.on('data', data => {
        //console.log(data.toString());
        client.end();
    });
}