import {SendData} from './client.js';

window.encodeFile = function encodeFile() {
    var filesSelected = document.getElementById("inputFile").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result;
            SendData(srcData);
        }   
        fileReader.readAsDataURL(fileToLoad);
    }
    document.getElementById("inputFile").value = "";
}