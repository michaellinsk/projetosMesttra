const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

var linha1 = lines[0].split(" ");

x1 = parseFloat(linha1[0]);
y1 = parseFloat(linha1[1]);

var linha2 = lines[1].split(" ");

x2 = parseFloat(linha2[0]);
y2 = parseFloat(linha2[1]);

const distancia = Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2));


console.log(distancia.toFixed(4));