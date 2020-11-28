export function Base64_Handler(data){
    var fileData = data.split(",");
    var header = fileData[0].split(":");
    var types = header[1].split(";");
    var typeOfFile = types[0];
    var type = typeOfFile.split('/');

    //Kép megjelenítése, ha bármilyen kép kiterjesztésű a fájl.
    if(type[0] == "image"){
        //Kép megjelenítése.
        var img = document.createElement("IMG");
        var br = document.createElement("BR");

        img.className = type;
        img.src = data;
        img.height = 240;

        document.body.appendChild(img);
        document.body.appendChild(br);
    }
    //Videó (lejátszása,) lejátszó megjelenítése. MKV-vel nem működik, MP4-el igen.
    else if(type[0] == "video"){
        //Videó megjelenítése
        var vid = document.createElement("VIDEO");
        var br = document.createElement("BR");

        vid.height = 240;
        vid.src = data;
        vid.controls = true;
        
        document.body.appendChild(vid);
        document.body.appendChild(br);
    }
    //Audio (lejátszása,) lejátszó megjelenítése.
    else if(type[0] == "audio"){
        //Videó megjelenítése
        var audio = document.createElement("AUDIO");
        var br = document.createElement("BR");
        
        //audio.height = 240;
        audio.src = data;
        audio.controls = true;
        
        document.body.appendChild(audio);
        document.body.appendChild(br);
    }
    else{
        throw "Not media file!";
    }
}