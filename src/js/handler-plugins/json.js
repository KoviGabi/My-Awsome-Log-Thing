const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};
var span;
function Json_Handler(data){
    var type = data.substring(data.indexOf("/")+1, data.indexOf(";"));
    var log_type;
    var log_data;
    var jsonData;
    if(type == "json"){
        var srcData = Buffer.from(data.split(",")[1], "base64").toString();
        jsonData = JSON.parse(srcData);
    } else{
        jsonData = JSON.parse(data);
    }
    if (jsonData.log_type && jsonData.log_data){
        log_type = jsonData.log_type.toUpperCase();
        log_data = jsonData.log_data;
    } else{
        log_type = "SOMETHING";
        log_data = JSON.stringify(jsonData);
    }
    JsonLogWriter(log_type, log_data);
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