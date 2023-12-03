// realiza a leitura das linhas no arquivo \dev\stdin
const input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
const lines = input.split('\r\n');

// Agora você só precisa de uma chamada de split para obter os valores individuais
const X = lines[0].split(' ').map(Number);

// Substitui os valores nulos e negativos por 1
for (let i = 0; i < X.length; i++) {
    if (X[i] <= 0) {
        X[i] = 1;
    }
}

// Agora você pode imprimir o vetor X
console.log(X);