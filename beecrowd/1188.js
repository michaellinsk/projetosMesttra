const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines[0].split(' ');
const operation = lines[0].trim();
const matrix = [];
let sum = 0;

for (let i = 0; i < 12; i++) {
  matrix[i] = lines[i + 1].trim().split(' ').map(Number);
}

// Calcula a soma ou média dos elementos na área inferior
for (let i = 7; i < 12; i++) {
  for (let j = 11 - i; j < i; j++) {
    sum += matrix[i][j];
  }
}

// Se a operação for média, divide a soma pelo número de elementos
if (operation === 'M') {
  sum /= 30;
}

console.log(sum.toFixed(1));