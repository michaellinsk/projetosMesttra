const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

linhas = lines[0].split(' ');
function justificador(textos) {
    for (let i = 0; i < textos.length; i++) {
        const linhas = textos[i].linhas;
        const maiorComprimento = linhas.reduce((max, linha) => Math.max(max, linha.length), 0);

        for (let j = 0; j < linhas.length; j++) {
            const linhaAtual = linhas[j].trim();
            const espacosEsquerda = ' '.repeat(maiorComprimento - linhaAtual.length);

            console.log(espacosEsquerda + linhaAtual);
        }

        console.log(); // Linha em branco entre os casos de teste
    }
}

// Exemplo de uso
const textos = [
    { linhas: ['     ROMEO      AND', '      JULIET WERE  ', '        IN LOVE    '] },
    { linhas: ['WHO', 'ELSE', 'LOVES', 'STAIRS'] },
    { linhas: ['A TEXT CAN BE JUSTIFIED', 'ON   BOTH   SIDES    OR', 'JUST   TO   THE   RIGHT'] }
];

justificador(textos);
