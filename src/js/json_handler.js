const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};

var malt_type;
var malt_data;
var jsonData;

export function Json_Handler(data){
    var type = data.substring(data.indexOf("/")+1, data.indexOf(";"));

    if(type == "json"){
        var srcData = Buffer.from(data.split(",")[1], "base64").toString();
        jsonData = JSON.parse(srcData);
    } else{
        jsonData = JSON.parse(data);
    }
    if (jsonData.malt_type && jsonData.malt_data){
        malt_type = jsonData.malt_type.toUpperCase();
        malt_data = jsonData.malt_data;
    } else{
        malt_type = "SOMETHING";
        malt_data = JSON.stringify(jsonData);
    }
    LogWriter();
}
function LogWriter(){
    var p = document.createElement("P");
    if (log_types[malt_type]){
        p.className = malt_type;
    } else{
        p.className = "SOMETHING";
    }    
    p.innerHTML = (malt_type + ": " + malt_data);
    document.body.appendChild(p);
}