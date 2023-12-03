const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 


a = parseFloat(lines[0]);
b = parseFloat(lines[1]);
let resultado = ((a * 3.5) + (b * 7.5)) / 11;

console.log("MEDIA = " + resultado.toFixed(5));

