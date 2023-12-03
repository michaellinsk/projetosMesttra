const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

let i = 1;
let j = 7;


while( i <=9){
    for( cont = 0; cont < 3; cont ++){
        console.log("I="+ i + " J="+ j);
        j--;
    }
    i +=2;
    j +=5;
}

