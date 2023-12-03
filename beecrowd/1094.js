const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

//linha = lines[0].split(" ");
N = parseInt(lines.shift());
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for( i = 0;  i < N; i++){
   const [quantidade, tipo] = lines[i].split(' ');' '
   quantidadeCobaias = parseInt(quantidade);
   totalCobaias += quantidadeCobaias;

   switch (tipo) {
    case 'C':
        totalCoelhos += quantidadeCobaias;
        break;
    case 'R':
        totalRatos += quantidadeCobaias;
        break;
    case "S":
        totalSapos += quantidadeCobaias;
        break;
   }
}
const percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
const percentualRatos = (totalRatos / totalCobaias) * 100;
const percentualSapos = (totalSapos / totalCobaias) * 100

console.log("Total: " + totalCobaias +" cobaias");
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Total de sapos: " + totalSapos);
console.log("Percentual de coelhos: " + percentualCoelhos.toFixed(2) + " %");
console.log("Percentual de ratos: " + percentualRatos.toFixed(2) + " %");
console.log("Percentual de sapos: " + percentualSapos.toFixed(2) + " %");
