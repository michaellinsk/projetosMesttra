const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines [0].split(" ");

tempSegundos = parseInt(lines[0]);


let qtdeHoras = Math.floor(tempSegundos /3600);
let resto = tempSegundos % 3600;
let qtdeMinutos = parseInt(resto /60);
resto = resto % 60;

let qtdeSegundos = parseInt(resto /1);
console.log(qtdeHoras + ":" + qtdeMinutos + ":" + qtdeSegundos);