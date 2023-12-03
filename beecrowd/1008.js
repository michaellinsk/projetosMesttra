const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

funcionario = parseInt(lines[0]);
horasT = parseInt(lines[1]);
valorH = parseFloat(lines[2]);

let resultado = (horasT * valorH);

console.log("NUMBER = " +funcionario);
console.log("SALARY = U$ "+resultado.toFixed(2));
