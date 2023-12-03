const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//
let T = parseInt(lines[0]);
let variaveis = [A,B,C,D,E] = (lines[1].split(' ').map(Number));

let cont = 0;

for(let i = 0; i < variaveis.length; i++) {
    if(variaveis[i] === T){
        cont ++;
    }
}
console.log (cont);