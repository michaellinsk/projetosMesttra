const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines =lines[0].split(" ");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

function baskara (a, b, c){
    const delta = b**2 -4*a*c;
    if (delta < 0 || a ==0){
        return 'Impossivel calcular'
    }

    const x1 = (- b + Math.sqrt(delta)) /(2 * a)
    const x2 = (- b - Math.sqrt(delta)) /(2 * a)

    return `R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`
}
console.log(baskara(a, b, c))