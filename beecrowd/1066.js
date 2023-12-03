const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;
 linha = lines[0].split(" ");


let pares = 0;
let impares = 0;
let negativo = 0;
let positivo = 0;

 a = parseFloat(lines[0].split(" "));
 b = parseFloat(lines[1].split(" "));
 c = parseFloat(lines[2].split(" "));
 d = parseFloat(lines[3].split(" "));
 e = parseFloat(lines[4].split(" "));
 if(a%2 == 0) {
    pares++;
 }else {impares++;}
    if(a > 0){
        positivo++;;
        }else 
        if(a < 0) {
            negativo++;}
            if(b%2 == 0) {
                pares++;
            }else{ impares++;} 
                if(b > 0){
                    positivo++;;
                }else 
                if(b < 0) {negativo++;}
                    if(c%2 == 0) {
                        pares++;
                    }else{ impares++;}
                        if(c > 0){
                            positivo++;;
                        }else 
                        if(c < 0){negativo++;}
                            if(d%2 == 0) {
                              pares++;
                            }else{ impares++; } 
                                if(d > 0){
                                    positivo++;
                                }else 
                                if(d < 0){negativo++;}
                                    if(e%2 == 0) {
                                        pares++;
                                    }else{ impares++; } 
                                        if(e > 0){
                                            positivo++;;
                                            }else 
                                            if(e < 0){negativo++;}



 console.log(pares + " valor(es) par(es)");
 console.log(impares + " valor(es) impar(es)");
 console.log(positivo + " valor(es) positivo(s)");
 console.log(negativo + " valor(es) negativo(s)");
 