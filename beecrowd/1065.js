const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); linha = lines[0].split(" ");


let pares = 0;

 a = parseInt(lines[0].split(" "));
 b = parseInt(lines[1].split(" "));
 c = parseInt(lines[2].split(" "));
 d = parseInt(lines[3].split(" "));
 e = parseInt(lines[4].split(" "));
 f = parseInt(lines[5].split(" "));

 if(a%2 == 0) {
    pares++;
 } if(b%2 == 0) {
    pares++;
 } if(c%2 == 0) {
    pares++;
 } if(d%2 == 0) {
    pares++;
 } if(e%2 == 0) {
    pares++;
 } if(f%2 == 0) {
    pares++;
 }

 console.log(pares + " valores pares");