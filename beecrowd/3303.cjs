const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


function palavra(palavras) {
    if(palavra.length >=10) {
        console.log('palavrao');
    }
    else {
        console.log('palavrinha');
    }
}
palavras = parseInt(lines[0]);
for(let i = 1; i < lines.length; i++){
    palavra(palavras[i]);
}
    