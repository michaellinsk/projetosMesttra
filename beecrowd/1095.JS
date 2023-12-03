const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;


let i = 1;
let j = 60;

while(j >= 0) {
    console.log("I="+ i + " J="+ j);
    i += 3;
    j -= 5
}