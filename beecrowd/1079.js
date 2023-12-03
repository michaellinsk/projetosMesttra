const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

//linha = lines[0].split(" ");

N = parseInt(lines.shift());

for( i = 0; i < N; i++){
    const media = lines[i].split(' ').map(Number);
    const a = media[0];
    const b = media[1];
    const c = media[2];

    mediaPonderada = ((a *2)+(b * 3) + (c *5))/10;
    console.log(mediaPonderada.toFixed(1));

}

