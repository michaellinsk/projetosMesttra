const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

// contra barra r e contra barra n \r\n 

//COLAR O BEECROWD O CODIGO ABAIXO


//Quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let a;
let b;
let X;


a = parseInt(lines[0]);
b = parseInt(lines[1]);

X = a + b;
console.log("X = " +X);