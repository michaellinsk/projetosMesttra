const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

//linha = lines[0].split(" ");

console.clear();
function somarImpares(x, y){
    let soma = 0;
    const inicio = Math.min(x, y) + 1
    const fim = Math.max(x, y);
    for(let i = inicio; i < fim; i++){
        if(i%2 !== 0){
            soma += i;
        }
    }
    return soma;
}

const N = parseInt(lines.shift());

for( i =0; i < N; i++ ){
    const[x, y] = lines[i].split(" ").map(Number);
    const resultado = somarImpares(x, y);
    console.log(resultado);

}