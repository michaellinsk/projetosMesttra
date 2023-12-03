const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


const [A, B, C] = input.trim().split(' ').map(Number);

function ePossivelViajarEVoltar(A, B, C) {
  return (
    A === B ||
    A === C ||
    B === C ||
    A + B === C ||
    A + C === B ||
    B + C === A
  );
}

const result = ePossivelViajarEVoltar(A, B, C) ? 'S' : 'N';

console.log(result);