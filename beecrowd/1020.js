const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');

lines = lines [0].split(" ");

diasDeVida = parseInt(lines[0]);

let ano = Math.floor(diasDeVida /365);
diasDeVida = diasDeVida % 365;
let mes = Math.floor(diasDeVida /30);
diasDeVida = diasDeVida % 30;

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(diasDeVida + " dia(s)");