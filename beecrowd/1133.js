const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

 
let x = parseInt(lines[0].split(' '));
let y = parseInt(lines[1].split(' '));
let menor = Math.min(x,y);
let maior = Math.max(x,y);

for( let i = menor + 1; i <maior; i++ ){
    if(i % 5 == 2 || i % 5==3){
        console.log(i);
    }
}