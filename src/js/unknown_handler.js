export function Unknown_Handler(data, length){
    var type = data.substring(data.indexOf(":")+1, data.indexOf(";"));
    var encodedData = Buffer.from(data.split(",")[1], 'base64').toString();
    var p = document.createElement("P");
    p.className = "SOMETHING";
    p.innerHTML = (type.toUpperCase() + ": " + encodedData);
    if (data.length < 1000) {
        p.innerHTML = (type.toUpperCase() + ": " + encodedData);
    }
    else{
        p.innerHTML = (type.toUpperCase() + ": longer than " + length + " characters!");
    }    
    document.body.appendChild(p);
}