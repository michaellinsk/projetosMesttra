const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

linha = lines [0].split(" ");
 
N = parseInt(linha[0]);

for (let i = 1; i <=N; i++) {
    if(N % i == 0) {
        console.log(i);
    }

}