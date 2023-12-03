const path = require('path');
const fs = require('fs');

const currentFile = path.dirname(process.argv[1]);
const input = fs.readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

N = parseInt(lines[0]);
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

// Calcula e imprime o fatorial de N
const resultado = calcularFatorial(N);
console.log(resultado);