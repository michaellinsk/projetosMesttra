const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 


a = parseFloat(lines[0]);
b = parseFloat(lines[1]);
c = parseFloat(lines[2]);
let resultado = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log("MEDIA = " + resultado.toFixed(1));

