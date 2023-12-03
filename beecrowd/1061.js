const { DiffieHellman } = require('crypto');
const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 


function extraindoInteiros(str){
 const partes = str.split(' : ');
 return partes.map(part => parseInt(part.trim(), 10));
}
diaI = parseInt(lines[0].split(' ')[1], 10);
[horaI, minutoI, segundoI] = extraindoInteiros(lines[1]);
diaF= parseInt(lines[2].split(' ')[1], 10);
[horaF, minutoF, segundoF] = extraindoInteiros(lines[3]); 

tempoI = segundoI + (minutoI * 60) +(horaI * 60 * 60) + (diaI * 24 * 60 * 60);

tempoF = segundoF + (minutoF * 60) +(horaF * 60 * 60) + (diaF * 24 * 60 * 60);

calculo = tempoF - tempoI;

dias =parseInt(calculo /( 24 *60 * 60));
calculo = calculo % (24 * 60 * 60);

horas =parseInt(calculo / (60 * 60));
calculo = calculo % (60 * 60);

minutos = parseInt(calculo / (60));
calculo = calculo % (60);

segundos = parseInt(calculo);

console.log(dias + " dia(s)");
console.log(horas + " hora(s)");
console.log(minutos + " minuto(s)");
console.log(segundos + " segundo(s)");
