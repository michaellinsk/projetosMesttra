const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 
 
linha = lines[0].split(" ");
 let x = parseFloat(linha[0]);
 let y = parseFloat(linha[1]);
 
 if(x==0 && y==0) {
 console.log("Origem");
}else if(x ==0 && y!=0) {
    console.log("Eixo Y")
}else 
if(x !=0 && y==0) {
    console.log("Eixo X")
}else
 if(x > 0 && y > 0 ) {
    console.log("Q1");
 }else 
    if(x < 0 && y > 0) {
    console.log("Q2");
 }else 
    if(x < 0 && y < 0) {
    console.log("Q3");
 }else 
  if(x > 0 && y < 0) {
    console.log("Q4");
 }