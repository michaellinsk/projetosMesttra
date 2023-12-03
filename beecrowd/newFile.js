const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;



  n = parseInt(lines.shift())
  for (let i = 1, count = 1; i <= n; i++) {
    const line = [];
    for (let j = 0; j < 3; j++) {
      line.push(count++);
    }
    line.push('PUM');
    console.log(line.join(' '));
  }
  
