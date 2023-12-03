const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


for(let i = 0; i < lines.length; i++) {
    let [x, y] = lines[i].split(' ').map(parseFloat);


if( x ===0 || y ===0 ){
    break;
}

if(x > 0 && y > 0 ) {
    console.log("primeiro");
    }else if(x < 0 && y > 0) {
        console.log("segundo");
        }else if(x < 0 && y < 0) {
            console.log("terceiro");
        }else if(x > 0 && y < 0) {
            console.log("quarto");
        }
}
