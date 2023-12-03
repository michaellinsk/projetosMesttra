const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

funcionario = toString(lines[0]);
salarioFixo = parseFloat(lines[1]);
vendasMes = parseFloat(lines[2]);

let salarioComBonus = ((15 * vendasMes) /100) + (salarioFixo);

console.log("TOTAL = " + salarioComBonus.toFixed(2));

