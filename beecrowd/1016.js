const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 


lines = lines[0].split(" ");

const distancia = parseInt(lines[0]);

console.log((distancia *2) +" minutos");