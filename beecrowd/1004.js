const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

// contra barra r e contra barra n \r\n 

//COLAR O BEECROWD O CODIGO ABAIXO

let a;
let b;

a = parseInt(lines[0]);
b = parseInt(lines[1]);

resultado = (a * b);
console.log("PROD = "+ resultado);