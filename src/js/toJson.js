import {getPath} from './client_send.js';

var fs = require('fs');

export function writeToJSON(/*typeOfData,*/data){

    //console.log(typeOfData);
    //console.log(data);

    /*var obj = {
        table: []
    };
    
    obj.table.push({type: typeOfData, data: data});

    var json = JSON.stringify(obj);
    var path = './data.json';

    fs.writeFile(path, json, 'utf8', function(err, result) {
        if(err) console.log('error', err);
      });*/

    getPath(/*typeOfData,*/data);
}


