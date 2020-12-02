import {UnknownWriter} from "./log_writer.js";

export function Unknown_Handler(data){
    if (DataHandler(data, "base64")){
        DataHandler(data, "string");        
    }
}
function DataHandler(data, handler){
    var encodedData;
    var type;
    try {
        switch (handler){
            case "base64":
                encodedData = Buffer.from(data.split(",")[1], 'base64').toString();
                type = data.substring(data.indexOf(":")+1, data.indexOf(";"));
                UnknownWriter(type, encodedData, length);
                break;
            case "string":
                encodedData = data;
                type = "string";
                UnknownWriter(type, encodedData, length);
                break;
            default:
                break;
        }
        return false;
    } catch (e){
        return true;
    }
}