    const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
// let raio = 0;
// let t = parseInt(lines[0]);

// // Função para calcular o menor raio do conduite
// function menorRaioConduite(r1, r2) {
//     return Math.sqrt(r1 ** 2 + r2 ** 2) + Math.min(r1, r2);
// }

// for (let i = 1; i <= t; i++) {
//     // Leitura dos raios R1 e R2 para cada caso
//     const [r1, r2] = lines[i].split(' ').map(Number);

//     // Cálculo do menor raio do conduite e impressão do resultado
//     const resultado = Math.ceil(menorRaioConduite(r1, r2));
//     console.log(resultado);
// }


function menor_raio_conduite(r1, r2) {
    return r1 + r2;
}

// Número de casos de teste
const t = parseInt(lines[0]);

// Processamento e saída para cada caso de teste
for (let i = 1; i <= t; i++) {
    const [r1, r2] = lines[i].split(' ').map(Number);
    const resultado = menor_raio_conduite(r1, r2);
    console.log(resultado);
}