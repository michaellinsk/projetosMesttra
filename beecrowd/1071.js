const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;



x = parseInt(lines[0].split(" "));

y = parseInt(lines[1].split(" "));


console.log(x);
console.log(y);

let soma = 0;
//for (let i = x, cont = 0; cont < 6;  i ++) {
    for (let i = Math.min(x, y) + 1; i < Math.max(x, y); i++) {
        if (i % 2 !== 0) {
        soma += i;
    }
    
}
console.log(soma);