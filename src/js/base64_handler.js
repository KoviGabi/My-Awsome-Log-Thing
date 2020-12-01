export function Base64_Handler(data){
    var type = data.substring(data.indexOf(":")+1, data.indexOf("/"));

    var image = document.createElement("IMG");
    var video = document.createElement("VIDEO");
    var audio = document.createElement("AUDIO");

    if(type == "image"){
        ShowMediaFile(image, data);
    } else if(type == "video"){
        ShowMediaFile(video, data);
    } else if(type == "audio"){
        ShowMediaFile(audio, data);
    } else{
        throw "Not media file!";
    }
}
function ShowMediaFile(type, data){
    type.src = data;
    type.height = 240;
    type.controls = true;
    document.body.appendChild(type);
    document.body.appendChild(document.createElement("BR"));
}