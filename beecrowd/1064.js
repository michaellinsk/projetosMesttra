const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); linha = lines[0].split(" ");


let positivos = 0;
let soma = 0;

 a =parseFloat(lines[0].split(" "));
 b = parseFloat(lines[1].split(" "));
 c = parseFloat(lines[2].split(" "));
 d = parseFloat(lines[3].split(" "));
 e = parseFloat(lines[4].split(" "));
 f = parseFloat(lines[5].split(" "));


if(a > 0){
    positivos ++;
    soma += a;
}if(b > 0){
    positivos ++;
    soma += b;
}if(c > 0){
    positivos ++;
    soma += c;
}if(d > 0){
    positivos ++;
    soma += d;
}if(e > 0){
    positivos ++;
    soma += e;
}if(f > 0){
    positivos ++;
    soma += f;
}

media = soma / positivos
console.log(positivos + " valores positivos");
console.log(media.toFixed(1));