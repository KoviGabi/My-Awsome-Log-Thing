var colors = require('colors');
var malt_type;
var malt_data;

export function json_handler(type, data){
    malt_type = type;
    malt_data = data;

    functions[type] && functions[type]();
}

const functions = {
    SQL: function SQL(){
        console.log(malt_type + ": " + malt_data);
        LogWriter();
    },
    ERROR: function ERROR(){
        console.log(malt_type + ": " + malt_data);
    },
    EXCEPTION: function EXCEPTION(){
        console.log(malt_type + ":" + malt_data);
    },
    LOG: function LOG(){
        console.log(malt_type + ": " + malt_data);
    }
};

function LogWriter() {
    var p = document.createElement("P");
    p.innerHTML = (malt_type + ": " + malt_data).green;
    //document.getElementById("logs").innerHTML = p.innerHTML;
    document.body.appendChild(p);
}