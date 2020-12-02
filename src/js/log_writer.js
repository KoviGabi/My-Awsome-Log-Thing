const log_types = {
    SQL: "SQL", ERROR: "ERROR", EXCEPTION: "EXCEPTION", LOG: "LOG"
};
function Time(){
    var date = new Date();
    var time = date.toTimeString().split(' ')[0];
    var div = document.createElement("DIV");
    div.className = "TIME";
    div.innerHTML = time + " ";
    return div;
}
export function JsonLogWriter(type, data){
    var span = document.createElement("SPAN");
    if (log_types[type]){
        span.className = type;
    } else{
        span.className = "SOMETHING";
    }
    span.innerHTML = type + ": " + data;
    Show(span);
}
export function MediaLogWriter(type, data){
    type.src = data;
    type.height = 240;
    type.controls = true;
    type.className = "MEDIA";
    Show(type);
}
export function UnknownWriter(type, data){
    var length = 1000;
    var span = document.createElement("SPAN");
    span.className = "SOMETHING";
    if (data.length < length){
        span.innerHTML = type.toUpperCase() + ": " + data;
    } else{
        span.innerHTML = type.toUpperCase() + ": Data is longer than " + length + " characters!";
    }
    Show(span);
}
function Show(log_data){
    var div = Time();
    div.appendChild(log_data);
    document.body.appendChild(div);
}