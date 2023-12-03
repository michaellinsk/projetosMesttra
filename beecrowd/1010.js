const path = require('path');
const { performance } = require('perf_hooks');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

//lines = lines[0].split(" ")
const  [peca1, nPeca1, valor1] = lines[0].split(" ");


//lines = lines[1].split(" ")
const [peca2, nPeca2, valor2] = lines[1].split(" "); 


total  = ((nPeca1 * valor1) + (nPeca2 * valor2));
console.log("VALOR A PAGAR: R$ " + total.toFixed(2));   