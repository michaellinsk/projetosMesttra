const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let codigo = parseInt(lines[0]);
let quantidade = parseInt(lines[1]);

if (codigo === 1){
  let  total = quantidade * 4.00
    console.log("Total: R$ "+total.toFixed(2));
}if (codigo === 2){
    let  total = quantidade * 4.50
    console.log("Total: R$ "+total.toFixed(2));
}if (codigo === 3) {
    let  total = quantidade * 5.00
    console.log("Total: R$ "+total.toFixed(2));
}if (codigo === 4) {
    let  total = quantidade * 2.00
    console.log("Total: R$ "+total.toFixed(2));
}if (codigo === 5) {
    let  total = quantidade * 1.50
    console.log("Total: R$ "+total.toFixed(2));
}
