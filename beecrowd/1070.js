const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;
 linha = lines[0].split(" ");

 linha = lines[0].split(" ");

 x = parseInt(lines[0]);


 for (let i = x, cont = 0; cont < 6;  i ++) {
    if(i%2 !== 0) {
        console.log(i);
        cont++;

    }
 }