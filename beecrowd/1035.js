const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

lines =lines[0].split(" ");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

if ((b > c) && (d > a) && (( c + d) > (a + b)) && ( c >= 0) && (d >= 0) && ((a % 2)=== 0)) {
    console.log("Valores aceitos");
} else {
console.log("Valores nao aceitos");
}