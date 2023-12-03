const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

linha = lines[0].split(" ");

let a = parseFloat(linha[0]);
let b = parseFloat(linha[1]);
let c = parseFloat(linha[2]);

if(a >= b +c || b>= a + c || c>= a + b) {
    console.log("NAO FORMA TRIANGULO");
}else if(a **2 === b **2 + c**2 || b **2 === a**2 + c**2 || c **2 === a**2 + b**2 ) {
    console.log("TRIANGULO RETANGULO");
}else if(a**2 > b**2 + c**2 || b**2 > a**2 + c**2 || c**2 > a**2 + b**2) {
    console.log("TRIANGULO OBTUSANGULO");
}else if(a**2 < b**2 + c**2 ||b**2 < a**2 + c**2 ||c**2 < a**2 + b**2){
    console.log("TRIANGULO ACUTANGULO");
}
if(a ===b && b ===c) {
    console.log("TRIANGULO EQUILATERO");
}else if(a ===b || b ===c || c ===a) { 
    console.log("TRIANGULO ISOSCELES");
}
