export function Unknown_Handler(data){
    var fileData = data.split(",");
    var header = fileData[0].split(":");
    var types = header[1].split(";");
    var typeOfFile = types[0];
    var type = typeOfFile.split('/');

    if(data.length < 1000){
        var p = document.createElement("P");
        p.className = "SOMETHING";
        p.innerHTML = (type.toString().toUpperCase() + ": " + Buffer.from(fileData[1].toString('utf8'), 'base64').toString('utf8'));
        document.body.appendChild(p);
    }
}