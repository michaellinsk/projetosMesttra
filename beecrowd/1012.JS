const path = require('path');
const { performance } = require('perf_hooks');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

lines = lines[0].split(" ");

const pi = 3.14159;
A = parseFloat(lines[0]);
B = parseFloat(lines[1]);
C = parseFloat(lines[2]);

TRIANGULO = ((A * C)/2);
CIRCULO = (pi * C **2);
TRAPEZIO = (((A + B) * C) /2);
QUADRADO = (B **2);
RETANGULO = (A * B);    

console.log("TRIANGULO: " + TRIANGULO.toFixed(3));
console.log("CIRCULO: " + CIRCULO.toFixed(3));
console.log("TRAPEZIO: " + TRAPEZIO.toFixed(3));
console.log("QUADRADO: " + QUADRADO.toFixed(3)); 
console.log("RETANGULO: " + RETANGULO.toFixed(3));