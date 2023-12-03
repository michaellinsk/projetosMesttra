const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
const lines = input.trim().split('\r\n');

for (const line of lines) {
  const [H, Z, L] = line.split(' ').map(Number);


  
    if ((H > Z && H < L) || (H < Z && H > L)) {
      console.log('huguinho');
    } else if ((Z > H && Z < L) || (Z < H && Z > L)) {
      console.log('zezinho');
    } else if((L > H && L < Z)|| (L < H && L > Z))
      console.log('luisinho');
    }