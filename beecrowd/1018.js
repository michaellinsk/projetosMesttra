const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n'); 

valor = parseInt(lines[0]);
console.log(valor);
let qtdNotas = parseInt(valor / 100);
console.log(qtdNotas + " nota(s) de R$ 100,00");
valor = valor % 100;
qtdNotas = parseInt(valor / 50);
console.log(qtdNotas + " nota(s) de R$ 50,00");
valor = valor % 50;
qtdNotas = parseInt(valor / 20);
console.log(qtdNotas + " nota(s) de R$ 20.00");
valor = valor % 20;
qtdNotas = parseInt(valor / 10);
console.log(qtdNotas + " nota(s) de R$ 10.00");
valor = valor % 10;
qtdNotas = parseInt(valor / 5);
console.log(qtdNotas + " nota(s) de R$ 5.00");
valor = valor % 5;
qtdNotas = parseInt(valor / 2);
console.log(qtdNotas + " nota(s) de R$ 2.00");
valor = valor % 2;
qtdNotas = parseInt(valor / 1);
console.log(qtdNotas + " nota(s) de R$ 1.00");

 
