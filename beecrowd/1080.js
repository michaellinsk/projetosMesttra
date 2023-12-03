const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

let maior = 0;
let posicao = 0;

for(let i = 0; i <  100; i++) {
    let numero = parseInt(lines[i]);

    if(numero > maior){
        maior = numero;
        posicao = i + 1;
    }
}
console.log(maior);
console.log(posicao);