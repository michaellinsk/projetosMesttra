const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

distanciaPercorrida = parseInt(lines[0]);

console.log(distanciaPercorrida);
combustivelGasto = parseFloat(lines[1]);

console.log(combustivelGasto);

let calculoMedio = distanciaPercorrida /combustivelGasto;

console.log(calculoMedio.toFixed(3)+" km/l");