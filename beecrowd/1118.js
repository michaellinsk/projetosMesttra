const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia() {
  let notas = [];
  let count = 0;

  function lerNota() {
    rl.question('Digite uma nota: ', (resposta) => {
      const nota = parseFloat(resposta);

      if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota);
        count++;

        if (count === 2) {
          const media = (notas[0] + notas[1]) / 2;
          console.log(`Média = ${media.toFixed(2)}`);
          perguntarNovoCalculo();
        } else {
          lerNota();
        }
      } else {
        console.log('Nota inválida. Digite uma nota entre 0 e 10.');
        lerNota();
      }
    });
  }

  lerNota();
}

function perguntarNovoCalculo() {
  rl.question('Novo cálculo (1-sim 2-não): ', (resposta) => {
    const opcao = parseInt(resposta);

    if (opcao === 1) {
      calcularMedia();
    } else if (opcao === 2) {
      console.log('Encerrando o programa.');
      rl.close();
    } else {
      console.log('Opção inválida. Use 1 para novo cálculo ou 2 para encerrar.');
      perguntarNovoCalculo();
    }
  });
}

calcularMedia();
