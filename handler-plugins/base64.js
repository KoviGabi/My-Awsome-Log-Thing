function Handler(data){
    let type = data.substring(data.indexOf(":")+1, data.indexOf("/"));
    if(type == "image"){        
        let image = document.createElement("IMG");
        return MediaLogWriter(image, data);
    } else if(type == "video"){
        let video = document.createElement("VIDEO");
        return MediaLogWriter(video, data);
    } else if(type == "audio"){  
        let audio = document.createElement("AUDIO");
        return MediaLogWriter(audio, data);
    } else{
        throw "Not handled media file!";
    }
}
function MediaLogWriter(type, data){
    type.src = data;
    type.height = 240;
    type.controls = true;
    type.className = "MEDIA";
    return type;
}
module.exports = {Handle:Handler};