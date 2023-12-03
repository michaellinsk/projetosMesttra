const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

linha = lines[0].split(" ");
let A = parseFloat(linha[0]);
let B = parseFloat(linha[1]);
let C = parseFloat(linha[2]);

perimetro = A + B + C;
area =  (A + B) * C/2;

if (A < (B + C) && B < (A + C) && C < (A + B)) { 
    console.log("Perimetro = " + perimetro.toFixed(1)); 
} else {
    console.log("Area = " + area.toFixed(1));
}