const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

a = parseInt(lines[0]);
b = parseInt(lines[1]);
c = parseInt(lines[2]);
d = parseInt(lines[3]);
let resultado = ((a *b) - (c * d));

console.log("DIFERENCA = " + resultado);

