const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

a = parseInt(lines[0]);
ultmoValor = lines.length -1
n = parseInt(lines[ultmoValor]);

let soma = 0

for( let i = 0; i< n; i++ ){   
    soma += a + i;
    }

console.log(soma);