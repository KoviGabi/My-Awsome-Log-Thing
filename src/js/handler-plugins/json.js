const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};
function Handler(data){
    var log_type;
    var log_data;
    var jsonData;
    if(data.substring(data.indexOf("/")+1, data.indexOf(";")) == "json"){
        var srcData = Buffer.from(data.split(",")[1], "base64").toString();
        jsonData = JSON.parse(srcData);
    } else{
        jsonData = JSON.parse(data);
    }
    if (jsonData.log_type){
        log_type = jsonData.log_type.toUpperCase();
    } else{
        log_type = "JSON";
    }
    if (jsonData.log_data){
        log_data = jsonData.log_data;
    } else{
        log_data = JSON.stringify(jsonData);
    }
    return JsonLogWriter(log_type, log_data);
}
function JsonLogWriter(type, data){
    var span = document.createElement("SPAN");
    if (log_types[type]){
        span.className = type;
    } else{
        span.className = "SOMETHING";
    }
    span.innerHTML = type + ": " + data;
    return span;
}
module.exports = {Handle: Handler}