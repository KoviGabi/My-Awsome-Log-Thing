import {SendData} from './client.js';

window.encodeFile = function encodeFile(){
    let filesSelected = document.getElementById("inputFile").files;
    if (filesSelected.length > 0){
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent){
            let srcData = fileLoadedEvent.target.result;
            SendData(srcData);
        }   
        fileReader.readAsDataURL(fileToLoad);
    }
    document.getElementById("inputFile").value = "";
}