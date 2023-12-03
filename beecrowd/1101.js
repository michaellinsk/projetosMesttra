const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

function somarSequencia(inicio, fim){
    let soma = 0;
    for(let i = Math.min(inicio, fim); i <= Math.max(inicio, fim); i++) {
        soma += i;
        process.stdout.write(i + " ");
    }
    
console.log('sum=' + soma);
}

function receberValorDeEntrada (){
    let [x, y] = lines.shift().split(' ').map(Number);

    if (x <= 0 || y<=0 ){
       return;
      }else{
        somarSequencia(x, y);
        receberValorDeEntrada();
      }
    }

receberValorDeEntrada();
      // const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function sumSequence(inicio, fim) {
//   let soma = 0;
//   for (let i = Math.min(inicio, fim); i <= Math.max(inicio, fim); i++) {
//     soma += i;
//     process.stdout.write(i + ' ');
//   }
//   process.stdout.write('sum=' + soma + '\n');
// }

// function receberValoresDeEntrada() {
//    const [m, n] = input.split(' ').map(Number);

//     if (m <= 0 || n <= 0) {
//       rl.close();
//     } else {
//       sumSequence(m, n);
//       receberValoresDeEntrada();
//     }

// }

// receberValoresDeEntrada();