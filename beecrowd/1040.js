const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

var linha1 = lines[0].split(" ");

 let n1 = parseFloat(linha1[0]);
 let n2 = parseFloat(linha1[1]);
 let n3 = parseFloat(linha1[2]);
 let n4 = parseFloat(linha1[3]);
 let media = ((n1 * 2) + (n2 * 3) + (n3 * 4)+ (n4 * 1)) / 10 

 console.log("Media: " + media.toFixed(1));
 if (media >= 7.0) {
    console.log("Aluno aprovado.");
 } else if (media < 5.0) {
    console.log("Aluno reprovado.");
}else if(media >=5.0 && media<=6.9) {
    console.log("Aluno em exame.");
    linha2 = lines[1].split(" ");
  exame = parseFloat(linha2[0]);
    console.log("Nota do exame: " + exame.toFixed(1));
   var resultado = (exame + media)/2
}if(resultado >=5.0){
    console.log("Aluno aprovado.")
    console.log("Media Final: " + resultado.toFixed(1));
}else if (resultado >=4.9) {
    console.log("Aluno reprovado.");
    console.log("Media final: " + resultado.toFixed(1));
}