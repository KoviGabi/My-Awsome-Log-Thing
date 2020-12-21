const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};
function Handler(data){
    let log_type;
    let log_data;
    let jsonData;
    if(data.substring(data.indexOf("/")+1, data.indexOf(";")) == "json"){
        let srcData = Buffer.from(data.split(",")[1], "base64").toString();
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
    let type_span = document.createElement("SPAN");
    let span = document.createElement("SPAN");
    if (log_types[type]){
        span.className = type;
        type_span.id = type;
    } else{
        span.className = "SOMETHING";
        type_span.id = "SOMETHING";
    }
    span.innerHTML = ' ' + data;
    type_span.innerHTML = type + ":";
    type_span.appendChild(span);
    return type_span;
}
module.exports = {Handle: Handler}