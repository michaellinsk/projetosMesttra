const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


// Cria uma variável para armazenar 50 caracteres
const frase = "AMO FAZER EXERCICIO NO URI";


console.log(`<${frase}>`);

console.log(`<${frase.padStart(30)}>`);

console.log(`<${frase.slice(0, 20)}>`);

console.log(`<${frase.slice(0, 30)}>`);

console.log(`<${frase.slice(0, 30).padEnd(30)}>`);

console.log(`<${frase.slice(0, 30)}>`);

console.log(`<${frase.slice(0, 20).padStart(30)}>`);


console.log(`<${frase.slice(0, 20).padEnd(30)}>`);
