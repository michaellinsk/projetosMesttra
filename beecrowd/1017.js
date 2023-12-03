const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

tempoGasto = parseInt(lines[0]);
velocidadeMedia = parseInt(lines[1]);

    combustivelGasto = (tempoGasto * velocidadeMedia) / 12;

    console.log(combustivelGasto.toFixed(3));

