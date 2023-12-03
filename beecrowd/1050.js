const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

linha = lines[0].split(" ");

ddd = parseInt(linha[0]);

switch (ddd) {
    case 11: 'são paulo'
    console.log('são paulo');
    break;
    case 19 : 'campinas'
    console.log('campinas');
    break;
    case 21: 'Rio de Janeiro'
    console.log('Rio de Janeiro');
    break;
    case 27 : 'Vitoria'
    case 31 :'Belo Horizonte'
    console.log('Belo Horizonte');
    break;
    case 32 : 'Juiz de Fora'
    console.log('Juiz de Fora');
    break;
    case 61: 'Brasilia'
    console.log('Brasilia');
    break;
    case 71: 'Salvador'
    console.log('Salvador');
    break;
    default :'DDD nao cadastrado'
    console.log("DDD nao cadastrado");
}