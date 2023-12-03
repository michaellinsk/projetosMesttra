const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
const input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
const lines = input.split('\r\n');

// Inicializa o vetor X com os 10 valores inteiros informados
const X = lines.map(Number);

// Substitui os valores nulos e negativos por 1
for (let i = 0; i < X.length; i++) {
    if (X[i] <= 0) {
        X[i] = 1;
    }
}

// Mostra o vetor X após a substituição
for (let i = 0; i < X.length; i++) {
    console.log(`X[${i}] = ${X[i]}`);
}
