const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); linha = lines[0].split(" ");


let positivos = 0;

 a = lines[0].split(" ");
 b = lines[1].split(" ");
 c = lines[2].split(" ");
 d = lines[3].split(" ");
 e = lines[4].split(" ");
 f = lines[5].split(" ");


if(a > 0){
    positivos ++;
}if(b > 0){
    positivos ++;
}if(c > 0){
    positivos ++;
}if(d > 0){
    positivos ++;
}if(e > 0){
    positivos ++;
}if(f > 0){
    positivos ++;
}


console.log(positivos + " valores positivos");