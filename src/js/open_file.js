import {writeToJSON} from './toJson.js';

window.encodeFile = function encodeFile() {
    var filesSelected = document.getElementById("inputFile").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: teljes base64

            var data = srcData.split(",");
            //console.log(data[0]);
            //console.log(data[1]); ---> Base64 adat rész
            var header = data[0].split(":");
            //console.log(header[0]); ---> Fejléc rész
            //console.log(header[1]); ---> Fejléc rész
            var type = header[1].split(";");
            //console.log(type[0]); ---> File típusa
            
            data = data[1];
            var typeOfFile = type[0];
            var image = typeOfFile.split('/');
            
            //Kép megjelenítése, ha bármilyen kép kiterjesztésű a fájl.
            if(image[0] == "image"){                
                //Kép megjelenítése
                var newImage = document.createElement('img');
                newImage.src = srcData;
                document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            }
            //console.log(typeOfFile);
            //console.log(data);
            //console.log(srcData);
            writeToJSON(srcData);
            //writeToJSON(typeOfFile, data);
        }   
        fileReader.readAsDataURL(fileToLoad);
    }
}