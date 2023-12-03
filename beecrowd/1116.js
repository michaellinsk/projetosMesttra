const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;


N = parseInt(lines.shift());

for(i = 0; i <N; i++){
    let [x, y] = lines[i].split(' ').map(parseFloat);

    if(y < 0 || y >0){
        divisao = x / y;
        console.log(divisao.toFixed(1));
    }else{ 
        console.log("divisao impossivel")
    }   
}