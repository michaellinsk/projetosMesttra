//importar o modulo fs(filesystem) para trabalhar com arquivos de diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorio
const endereco = require('path');

//Descubro o endereço de onde o meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirnme(process.argv[1]);

//reliza  leitura das linhas do arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

// define qual é a quebra de linha utilizada no seu sisema operacional
//se estiver utilizando linux coloque apenas \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let = lines = conteudoArquivo.split(quebraLinhaWindows);
let ordem = 4;

let matriz = [[]]


for( let i =0; i < lines.length; i++ ){
    ordem = lines[1]

    //gerar os valores que serao utilizados como llinhas de linhas
for( let linha =0; linha < ordem; linha ++) {
    let colunas = []
// gerar os valores que serao utilizados coomocolunas
    for(let coluna = 0; coluna < ordem; coluna ++) {
        colunas[coluna] = identificarValorCelula(Linha, Coluna)
    
   }
        matriz[linha] = colunas

}

}






//gerar os valores que serao utilizados como llinhas de linhas
for( let linha =0; linha < ordem; linha ++) {
    let colunas = []
// gerar os valores que serao utilizados coomocolunas
    for(let coluna = 0; coluna < ordem; coluna ++) {
        colunas[coluna] = identificarValorCelula(Linha, Coluna)
    
   }
        matriz[linha] = colunas

}
console.log()

//mprime os valores
for( let linha =0; linha < ordem; linha ++) {
    let textoLinha = [""
// gerar os valores que serao utilizados coomocolunas
    for(let coluna = 0; coluna < ordem; coluna ++) {
        textoValor = String(matrix[linha][coluna])
        textoValor += textoValor.padStart(3," ") + " "
    
   }



function identificarValorCelula(linha,coluna){
    return Math.abs(linha - coluna) + 1
}