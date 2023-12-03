const path = require('path');
const fs = require('fs');

const currentFile = path.dirname(process.argv[1]);
const inputFilePath = path.join(currentFile, 'dev', 'stdin');

const input = fs.readFileSync(inputFilePath, 'utf8');
const lines = input.split('\r\n');

// Converta o array de strings em um array de números
const notas = lines[0].split(' ').map(Number);

let opcao = 1;
for(i = 0; i < notas.length; i++){
// Use um loop do-while para solicitar notas até que opcao não seja mais igual a 1
    do {
        if(notas < 0 || notas >10){
            console.log('nota invalida.');
         
        }else
            if (notas > 0 && notas <=10) {
                // Remova as duas primeiras notas e calcule a média
                notas = lines.length.split(' ');
                    const nota1 = notas.shift();
                    const nota2 = notas.shift();
                    const media = (nota1 + nota2) / 2;

                    console.log(`Média = ${media.toFixed(2)}`);
            }
    
        

            
    } while (opcao === 1);
    notas.shift();
console.log('Novo cálculo (1-sim, 2-não): ');
opcao = parseInt(lines[i]);

console.log('Encerrando o programa.');
}