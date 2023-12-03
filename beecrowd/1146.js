const path = require('path');
const fs = require('fs');

const currentFile = path.dirname(process.argv[1]);

// Realiza a leitura das linhas no arquivo \dev\stdin
const input = fs.readFileSync(currentFile + '\\dev\\stdin', 'utf8');
const lines = input.split('\r\n');

const numeroDeTeste = lines.length;

let inicio = 0;
let test = 0;
for ( test = 1; test <= numeroDeTeste; test++) {
    const N = parseInt(lines[inicio]);
    inicio++;

    for (let i = 1; i <= N; i++) {

        process.stdout.write(i.toString());
        if (i !== N) {
            process.stdout.write(' ');
        }
     }
     process.stdout.write('\n');
}