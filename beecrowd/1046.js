const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines =lines[0].split(" ");

let horaInicio = parseInt(lines[0])
let horaFinal = parseInt(lines[1])

if(horaInicio < horaFinal){
     tempo = horaFinal - horaInicio;
}else{
    tempo = (24 - horaInicio) + horaFinal; 
}

console.log(" O JOGO DUROU " + tempo +" HORA(S)");