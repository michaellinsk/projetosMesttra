const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var fs = require('fs');
var input = fs.readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

const linha = lines[0].split(" ").map(Number);

const x = linha[0];
const y = linha[1];
let aux = 1;
let output = '';

for (let i = 1; i <= y; i++) {
    if (aux === x) {
        output += i + '\n';
        aux = 1;
    } else {
        output += i + ' ';
        aux += 1;
    }
}

console.log(output.trim()); // Remova o espaço em branco extra no final
