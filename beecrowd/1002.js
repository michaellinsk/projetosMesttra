const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

// contra barra r e contra barra n \r\n 

//COLAR O BEECROWD O CODIGO ABAIXO
const n = 3.14159;

let raio;

raio = parseFloat(lines[0]);

let area = n * raio ** 2;

console.log("A="+ area.toFixed(4));