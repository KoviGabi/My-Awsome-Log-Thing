import {Unknown_Handler} from "./unknown_handler.js";

let glob = require('glob');
let path = require('path');
let fs = require('fs') ;

export function Handler(data){
  let i = 0;
  let plugins = [];
  glob.sync(path.resolve("../handler-plugins", '*.js')).forEach(function(file){
    plugins[i++] = require(file);
  });
  for (let j = 0; j < plugins.length + 1; j++) {
    try {
      if (j == plugins.length) {
        Show(Unknown_Handler(data));
      }
      else if (plugins[j].Handle(data)) {
        let span = plugins[j].Handle(data);
        Show(span, data);
        j = plugins.length + 1;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
function Time(){
  let date = new Date();
  let time = date.toTimeString().split(' ')[0];
  let div = document.createElement("DIV");
  div.className = "TIME";
  div.innerHTML = time + " ";
  return div;
}
function Show(span, data){
  let line = document.createElement("HR");
  let div = Time();
  div.appendChild(span);
  LogSaver(div, data);
  document.body.appendChild(div);
  document.body.appendChild(line);
  let scrolldown = (document.scrollingElement || document.body);
  scrolldown.scrollTop = scrolldown.scrollHeight;
}
function LogSaver(div, data)
{ 
  let size = 26214400; //25MB
  let d = new Date();
  let date = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
  let text = div.textContent;
  if(text.length == 9) {
    if (data.length > size) {
      text += "Data is bigger than 25MB.";
    } else {
      text += data;
    }
  }
  fs.appendFile('../logs/'+(date + '.txt'), ('\r\n' + text), function (err) {
    if (err) throw err;
  });
}