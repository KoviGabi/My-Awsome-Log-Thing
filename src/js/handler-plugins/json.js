const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};
var span;
function Json_Handler(data){
    var type = data.substring(data.indexOf("/")+1, data.indexOf(";"));
    var malt_type;
    var malt_data;
    var jsonData;
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
    JsonLogWriter(malt_type, malt_data);
}
function JsonLogWriter(type, data){
    span = document.createElement("SPAN");
    if (log_types[type]){
        span.className = type;
    } else{
        span.className = "SOMETHING";
    }
    span.innerHTML = type + ": " + data;
}
module.exports = {
    Test: function(data){
        Json_Handler(data);
        return span;
    }    
}