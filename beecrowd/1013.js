const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

lines = lines[0].split(" ");

a = parseInt(lines[0]);
b = parseInt(lines[1]);
c = parseInt(lines[2]);

maiorAB = (a + b + Math.abs(a - b)) /2
maiorC = (maiorAB + c +Math.abs(maiorAB - c)) /2

console.log(maiorC +" eh o maior")

