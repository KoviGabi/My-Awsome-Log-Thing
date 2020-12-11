export function Unknown_Handler(data){
    let span;
    if ((span = DataHandler(data, "base64")) === true){
        span = DataHandler(data, "string");        
    }
    return span;
}
function DataHandler(data, handler){
    var encodedData;
    var type;
    try {
        switch (handler){
            case "base64":
                encodedData = Buffer.from(data.split(",")[1], 'base64').toString();
                type = data.substring(data.indexOf(":")+1, data.indexOf(";"));
                return UnknownWriter(type, encodedData);
            case "string":
                encodedData = data;
                type = "string";
                return UnknownWriter(type, encodedData);
            default:
                return false;
        }
    } catch (e){
        return true;
    }
}
export function UnknownWriter(type, data){
    var length = 1024;
    var span = document.createElement("SPAN");
    span.className = "SOMETHING";
    if (data.length < length){
        span.innerHTML = type.toUpperCase() + ": " + data;
    } else{
        span.innerHTML = type.toUpperCase() + ": Data is longer than " + length + " characters!";
    }
    return span;
}