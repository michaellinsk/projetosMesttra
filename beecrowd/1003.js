const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

// let a;
// let b;

// a = parseInt(lines[0]);
// b = parseInt(lines[1]);

// soma = a + b;
// console.log("SOMA = "+ soma);

let a = 10
let b = 9

const X = a + b;

console.log("X =", X)