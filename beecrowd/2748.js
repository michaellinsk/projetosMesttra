const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

console.log("---------------------------------------");
console.log("|        Roberto                      |");
console.log("|                                     |");
console.log("|        5786                         |");
console.log("|                                     |");
console.log("|        UNIFEI                       |");
console.log("---------------------------------------");