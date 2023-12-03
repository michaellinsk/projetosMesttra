const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

linha = lines[0].split(" ");

let a = parseInt(linha[0]);
let b = parseInt(linha[1]);

if(a % b === 0) {
    console.log("Sao Multiplos");
} else if(b % a === 0) {
    console.log("Sao Multiplos");
}else{  
    console.log("Nao sao Multiplos");
}