const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//
A = parseInt(lines[0].split(' '));
M = parseInt(lines[1]);


let B = 2 * M - A;


console.log(B);