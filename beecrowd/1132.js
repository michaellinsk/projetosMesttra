const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

 
let x = parseInt(lines[0].split(' '))
let y = parseInt(lines[1].split(' '));
let menor = Math.min(x, y);
let maior = Math.max(x, y);

 
let soma = 0;


for(let i =menor ; i<=maior; i++){
        if(i % 13 !==0){
            soma +=i;
        }
    }
console.log(soma)
