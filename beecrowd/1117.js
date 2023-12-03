const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

let cont = 0;

let soma = 0;
let media;
for(var i = 0; i < lines.length; i++){
    let [nota] = lines[i].split(' ').map(parseFloat)
    
    if(nota >= 0 && nota <= 10){
        cont++;
        soma+=nota;
    }else{
        console.log("nota invalida");
    }
    

        if(cont === 2){
            media = soma /2;
            console.log("media = " + media.toFixed(2));
            break; 

        }

}