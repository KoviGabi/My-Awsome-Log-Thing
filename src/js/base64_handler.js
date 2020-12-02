import {MediaLogWriter} from "./log_writer.js";

export function Base64_Handler(data){
    var type = data.substring(data.indexOf(":")+1, data.indexOf("/"));

    var image = document.createElement("IMG");
    var video = document.createElement("VIDEO");
    var audio = document.createElement("AUDIO");

    if(type == "image"){
        MediaLogWriter(image, data);
    } else if(type == "video"){
        MediaLogWriter(video, data);
    } else if(type == "audio"){
        MediaLogWriter(audio, data);
    } else{
        throw "Not media file!";
    }
}