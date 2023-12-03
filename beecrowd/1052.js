const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); linha = lines[0].split(" ");

linha = lines[0].split(" ");
mes = parseInt(linha[0]);

switch (mes) {
    case 1: 'Janeiro'
    console.log('January');
    break;
    case 2 : 'Fevereiro'
    console.log('February');
    break;
    case 3: 'Março'
    console.log('March');
    break;
    case 4 : 'Abril'
    console.log('April');
    break;
    case 5 :'Maio'
    console.log('May');
    break;
    case 6 : 'Junho'
    console.log('June');
    break;
    case 7: 'Julho'
    console.log('July');
    break;
    case 8: 'Agosto'
    console.log('August');
    break;
    case 9 : 'Setembro'
    console.log('September');
    break;
    case 10 : 'Outubro'
    console.log('October');
    break;
    case 11 : 'Novembro'
    console.log('November');
    break;
    case 12 : 'Dezembro'
    console.log('December');
    break;
    default :
}
