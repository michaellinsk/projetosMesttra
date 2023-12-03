const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;





for(let i = 1; i <= 9; i+=2){
    for(let j = 7; j >=5; j--){

    console.log("I="+ i + " J="+ j);

    }
}