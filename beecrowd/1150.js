const path = require('path');
const fs = require('fs');

const currentFile = path.dirname(process.argv[1]);
const input = fs.readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// Leitura dos valores de X e Z
const x = parseInt(lines[0]);
let z = parseInt(lines[1]);

// Certifique-se de que Z seja maior que X
while (z <= x) {
    z = parseInt(lines.shift());
}

// Função para calcular a contagem
function calculateCount(x, z) {
    let soma = x;
    let count = 1;

    while (soma <= z) {
        x++;
        soma += x;
        count++;
    }

    return count;
}

// Calcular e imprimir o resultado
const result = calculateCount(x, z);
console.log(result);
