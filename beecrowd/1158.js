  const path = require('path');
  const currentFile = path.dirname(process.argv[1]);

  // realiza a leitura das linhas no arquivo \dev\stdin
  var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
  var lines = input.split('\r\n');exports.lines = lines;

const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {

  const [x, y] = lines[i].split(' ').map(Number);


  let soma = 0;

  for (let j = x, count = 0; count < y; j++) {
    if (j % 2 !== 0) {
   
      soma += j;
      count++;
    }
  }


  console.log(soma);
}