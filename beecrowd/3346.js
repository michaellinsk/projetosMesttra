
const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// Lê as flutuações do PIB nos dois anos
const [f1, f2] = lines[0].split(' ').map(parseFloat);

// Calcula a flutuação total
const totalFluctuation = (1 + f1 / 100) * (1 + f2 / 100) - 1;

// Imprime o resultado com exatamente seis casas decimais
console.log(totalFluctuation.toFixed(6));
