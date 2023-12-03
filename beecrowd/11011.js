const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;



function sumSequence(start, end) {
    let sum = 0;
  
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
      sum += i;
      process.stdout.write(i + ' ');
    }
  
    process.stdout.write(`Sum=${sum}\n`);
  }
  
  function readInput() {
    rl.question('', (input) => {
      const [m, n] = input.split(' ').map(Number);
  
      if (m <= 0 || n <= 0) {
        rl.close();
      } else {
        sumSequence(m, n);
        readInput();
      }
    });
  }
  
  readInput();