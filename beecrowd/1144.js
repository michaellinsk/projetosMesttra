  const path = require('path');
  const currentFile = path.dirname(process.argv[1]);

  // realiza a leitura das linhas no arquivo \dev\stdin
  var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
  var lines = input.split('\r\n');exports.lines = lines;

  N = parseInt(lines.shift());

  v1 = 1;
  for( i = 0; i< N; i++){
    console.log(v1, v1 **2, v1 **3 );
    console.log(v1, (v1 **2) + 1, (v1 **3)+1);
    v1++;
  }