const path = require('path');
const { performance } = require('perf_hooks');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

const pi = 3.14159;

let R3 = parseFloat(lines[0]);

let volume = ((4/3.0) * pi * R3**3);

console.log("VOLUME = "+ volume.toFixed(3));