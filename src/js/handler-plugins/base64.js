var span;
function Handler(data){
    var type = data.substring(data.indexOf(":")+1, data.indexOf("/"));
    if(type == "image"){        
        var image = document.createElement("IMG");
        MediaLogWriter(image, data);
    } else if(type == "video"){
        var video = document.createElement("VIDEO");
        MediaLogWriter(video, data);
    } else if(type == "audio"){  
        var audio = document.createElement("AUDIO");
        MediaLogWriter(audio, data);
    } else{
        throw "Not handled media file!";
    }
}
function MediaLogWriter(type, data){
    type.src = data;
    type.height = 240;
    type.controls = true;
    type.className = "MEDIA";
    span = type;
}
module.exports = {
    Handle: function(data){
        Handler(data);
        return span;
    }    
}