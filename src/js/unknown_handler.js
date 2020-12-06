var span;
export function Unknown_Handler(data){
    if (DataHandler(data, "base64")){
        DataHandler(data, "string");        
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
                UnknownWriter(type, encodedData);
                break;
            case "string":
                encodedData = data;
                type = "string";
                UnknownWriter(type, encodedData);
                break;
            default:
                break;
        }
        return false;
    } catch (e){
        return true;
    }
}
export function UnknownWriter(type, data){
    var length = 1000;
    span = document.createElement("SPAN");
    span.className = "SOMETHING";
    if (data.length < length){
        span.innerHTML = type.toUpperCase() + ": " + data;
    } else{
        span.innerHTML = type.toUpperCase() + ": Data is longer than " + length + " characters!";
    }
}