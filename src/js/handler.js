import {Unknown_Handler} from "./unknown_handler.js";

var glob = require('glob');
var path = require('path');

export function Handler(data){
  var i = 0;
  var plugins = [];
  glob.sync(path.resolve("js/handler-plugins", '*.js')).forEach(function(file){
    plugins[i++] = require(file);
    console.log(plugins[i-1]);
  });
  for (var j = 0; j < plugins.length + 1; j++) {
    try {
      if (j == plugins.length) {
        Show(Unknown_Handler(data));
      }
      else if (plugins[j].Handle(data)) {
        var span = plugins[j].Handle(data);
        Show(span);
        j = plugins.length + 1;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
function Time(){
  var date = new Date();
  var time = date.toTimeString().split(' ')[0];
  var div = document.createElement("DIV");
  div.className = "TIME";
  div.innerHTML = time + " ";
  return div;
}
function Show(span){
  var div = Time();
  div.appendChild(span);
  document.body.appendChild(div);
}