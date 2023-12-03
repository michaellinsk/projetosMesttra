const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

//linha = lines[0].split(" ");

N = parseInt(lines.shift());

let dentro = 0;
let fora = 0;
let X;
for(i = 1; i <=N; i++){

   X = parseInt(lines.shift());
    if(X >=10 && X<=20){
       dentro +=1;
    }else{
       fora +=1;
    }
}
console.log(dentro + " in");

console.log(fora + " out");