const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;


for (const line of lines) {
  let [x, y] = line.split(' ').map(Number);

  if (x === y) {
    break; // Termina o loop quando x e y são iguais
  }

  if (x < y) {
    console.log("Crescente");
  } else {
    console.log("Decrescente");
  }
}
