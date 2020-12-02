export function Time(){
    var date = new Date();
    var time = date.toTimeString().split(' ')[0];
    var div = document.createElement("DIV");
    div.className = "TIME";
    div.innerHTML = time + " ";
    return div;
}