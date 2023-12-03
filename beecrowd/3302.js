const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
// Lê o número de casos de teste
const numCasos = parseInt(lines[0].split(' '));
// Loop pelos casos de teste
for (let i = 1; i <= numCasos; i++) {
    // Lê o número associado à pergunta
    const numeroPergunta = parseInt(lines[i]);
    // Imprime a resposta formatada
    console.log(`resposta ${i}: ${numeroPergunta}`);
}