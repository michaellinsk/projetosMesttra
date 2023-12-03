const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let horaInicial = parseInt(lines[0]);
let minutoInicial = parseInt(lines[1]);
let horaFinal = parseInt(lines[2]);
let minutoFinal = parseInt(lines[3]);

if (horaFinal > horaInicial && minutoFinal > minutoInicial) {
    horaTotal = horaFinal - horaInicial;
    minutoTotal = minutoFinal - minutoInicial;
    console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
} else
    if (horaFinal > horaInicial && minutoInicial > horaFinal) {
        horaTotal = (horaFinal - horaInicial) - 1
        minutoTotal = (minutoFinal - minutoInicial) + 60;
        console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
    } else
        if (horaFinal == horaInicial && minutoInicial > minutoFinal) {
            horaTotal = 23;
            minutoTotal = (minutoFinal - minutoInicial) + 60;
            console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
        } else
            if (horaFinal == horaInicial && minutoFinal > minutoInicial) {
                horaTotal = 0;
                minutoTotal = minutoFinal - minutoInicial;
                console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
            } else
                if (horaFinal > horaInicial && minutoFinal == minutoInicial) {
                    horaTotal = horaFinal - horaInicial;
                    minutoTotal = 0
                    console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
                } else
                    if (horaFinal < horaInicial && minutoFinal == minutoInicial) {
                        horaTotal = (horaFinal - horaInicial) + 24
                        minutoTotal = 0
                        console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
                    } else
                        if (horaFinal < horaInicial && minutoFinal > minutoInicial) {
                            horaTotal = (horaFinal - horaInicial) + 24
                            minutoTotal = minutoFinal - minutoInicial;
                            console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
                        } else
                            if (horaInicial > horaFinal && minutoInicial > minutoFinal) {
                                horaTotal = (horaFinal - horaInicial) + 23
                                minutoTotal = (minutoFinal - minutoInicial) + 60
                                console.log("O JOGO DUROU " + horaTotal + " HORA(S) E "+ minutoTotal + " MINUTO(S)");
                            } else {
                                console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
                            }