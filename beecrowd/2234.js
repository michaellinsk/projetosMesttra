const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// Ajuste na leitura e conversão dos valores H e P
const [H, P] = lines[0].split(' ').map(Number);

const media = (H / P).toFixed(2);

console.log(media);
