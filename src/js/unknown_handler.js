var encodedData;
var type;

export function Unknown_Handler(data, length){
    if (DataHandler(data, "base64")){
        DataHandler(data, "string");        
    }
    LogWriter(data, length);
}
function DataHandler(data, handler){
    try {
        switch (handler){
            case "base64":
                encodedData = Buffer.from(data.split(",")[1], 'base64').toString();
                type = data.substring(data.indexOf(":")+1, data.indexOf(";"));
                break;
            case "string":
                encodedData = data;
                type = "string";
                break;
            default:
                break;
        }
        return false;
    } catch (e){
        return true;
    }
}
function LogWriter(data, length){
    var p = document.createElement("P");
    p.className = "SOMETHING";
    p.innerHTML = (type.toUpperCase() + ": " + encodedData);
    if (data.length < 1000){
        p.innerHTML = (type.toUpperCase() + ": " + encodedData);
    } else{
        p.innerHTML = (type.toUpperCase() + ": longer than " + length + " characters!");
    }    
    document.body.appendChild(p);
}