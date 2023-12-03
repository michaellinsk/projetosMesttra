// //importar o modulo fs(filesystem) para trabalhar com arquivos de diretorios
// const fileSystem = require('fs')

// //importo o modulo path para trabalhar com o endereço de arquivos e diretorio
// const endereco = require('path');

// //Descubro o endereço de onde o meu script js esta salvo
// //ex: c:\documentos\javascript
// const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

// //reliza  leitura das linhas do arquivo dev\stdin que foi criado
// const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

// // define qual é a quebra de linha utilizada no seu sisema operacional
// //se estiver utilizando linux coloque apenas \n se for windows coloque \r\n
// const quebraLinhaWindows = '\r\n'


// let = lines = conteudoArquivo.split(quebraLinhaWindows);
// let ordem

// let matriz = [[]]

// //para cada valor enviado pelo beecrowd
// //construa a matriz
// for(let i = 0; i < (lines.length - 1); i++){
//     ordem = linhas[i]
    
//     //gerar os valores que serão utilizados como linhas
//     for (let linha = 0; linha < ordem; linha++){
//         let colunas = []
//         //gerar os valores que serão utilizados como colunas
//         for(let coluna = 0; coluna < ordem; coluna++){
//             colunas[coluna] = identificarValorCelula(linha, coluna)
//         }

//         matriz[linha] = colunas
//     }

//     //imprimir os valores na tela
//     //gera as linhas
//     let textoValor
//     for (let linha = 0; linha < ordem; linha++){
//         //gerar as colunas
//         let textoLinha = ""
//         for(let coluna = 0; coluna < ordem; coluna++){
//             textoValor = matriz[linha][coluna].toString()
//             textoLinha += textoValor.padStart(3)

//             if (coluna < (ordem - 1)) {
//                 textoLinha += " "
//             }

//         }
//         console.log(textoLinha)
//     }

//     console.log("")
// }


// function identificarValorCelula(linha, coluna){
//     return Math.abs(linha - coluna) + 1
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let cont = 0;
let nota;
let soma = 0;
let media;


for(var i = 0; i < lines.length; i++){
  [nota] = lines[i].split(' ').map(parseFloat)

  if(nota >= 0 && nota <= 10){
    cont++;
    soma+=nota;
    lerNota();
}else{
    console.log("nota invalida");
}
}
function lerNota() {
  if (cont === 2) {
    media = soma / 2;
    console.log("media = " + media.toFixed(2));

    rl.question('Deseja realizar um novo cálculo? (1 - Sim / 2 - Não): ', (resposta) => {
      if (resposta === '1') {
        cont = 0;
        soma = 0;
        lerNota();
      } else if (resposta === '2') {
        rl.close();
      } else {
        console.log('Opção inválida. Use "1" para continuar ou "2" para encerrar.');
        lerNota();
      }
    });
  } else {
    [nota] = lines[cont].split(' ').map(parseFloat);

    if (nota >= 0 && nota <= 10) {
      cont++;
      soma += nota;
      lerNota();
    } else {
      console.log("nota invalida");
      lerNota();
    }
  }
}

console.log('Bem-vindo ao calculador de médias!');
lerNota();
