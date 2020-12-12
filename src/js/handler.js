import {Unknown_Handler} from "./unknown_handler.js";

let glob = require('glob');
let path = require('path');

export function Handler(data){
  let i = 0;
  let plugins = [];
  glob.sync(path.resolve("js/handler-plugins", '*.js')).forEach(function(file){
    plugins[i++] = require(file);
  });
  for (let j = 0; j < plugins.length + 1; j++) {
    try {
      if (j == plugins.length) {
        Show(Unknown_Handler(data));
      }
      else if (plugins[j].Handle(data)) {
        let span = plugins[j].Handle(data);
        Show(span);
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
function Show(span){
  let line = document.createElement("HR");
  let div = Time();
  div.appendChild(span);
  document.body.appendChild(div);
  document.body.appendChild(line);
  let scrolldown = (document.scrollingElement || document.body);
  scrolldown.scrollTop = scrolldown.scrollHeight;
}