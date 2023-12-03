const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let soma = 0;
let cont = 0;

for (const linha of lines) {
  const idade = parseInt(linha);

  if (idade < 0) {
    break; // Sai do loop quando uma idade negativa é lida
  }

  soma += idade;
  cont++;
}

if (cont > 0) {
  const average = soma / cont;
  console.log(average.toFixed(2));
}