const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let linha = lines[0].split(" ");

let n1 = parseInt(linha[0]);
let n2 = parseInt(linha[1]);
let n3 = parseInt(linha[2]);

let valoresCrescente = [n1, n2, n3].sort((a, b) => a - b);
console.log("Valores em ordem crescente:");
valoresCrescente.forEach(valor => {
  console.log(valor);
});

console.log("");

console.log(n1);
console.log(n2);
console.log(n3);