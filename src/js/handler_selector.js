import {Json_Handler} from "./json_handler.js";
import {Base64_Handler} from "./base64_handler.js";
import {Unknown_Handler} from "./unknown_handler.js";

export function HandlerSelector(srcData){
    var data = srcData;
    if (DataHandler("JSON", data)){
        if (DataHandler("base64", data)){
            DataHandler("else", data);
        }
    }
}
function DataHandler(handler, data){
    try {
        switch (handler){
            case "JSON":
                Json_Handler(data);
                break;
            case "base64":
                Base64_Handler(data);
                break;
            case "else":
                Unknown_Handler(data);
                break;
            default:
                break;
        }
        return false;
    } catch (e){
        return true;
    }
}