import {Json_Handler} from "./json_handler.js";
import {Base64_Handler} from "./base64_handler.js";
import {Unknown_Handler} from "./unknown_handler.js";

export function HandlerSelector(){
    if (DataHandler("JSON")){
        if (DataHandler("base64")){
            DataHandler("else");
        }
    }
}
function DataHandler(handler){
    try {
        switch (handler){
            case "JSON":
                Json_Handler(data);
                break;
            case "base64":
                Base64_Handler(data);
                break;
            case "else":
                Unknown_Handler(data, 1000);
                break;
            default:
                break;
        }
        return false;
    } catch (e){
        return true;
    }
}