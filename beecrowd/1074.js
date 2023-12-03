const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

//linha = lines[0].split(" ");

N = parseInt(lines.shift());

let x;
for(i = 1; i <=N; i++){

   x = parseInt(lines.shift());
   if(x % 2 ==0 && x > 0 ){
        console.log("EVEN POSITIVE")
   }else
        if(x % 2 == 0 && x < 0 ){
        console.log("EVEN NEGATIVE")
        }

    if(x % 2 != 0 && x > 0){
        console.log("ODD POSITIVE")
    }else 
        if(x % 2 != 0 && x < 0){
            console.log("ODD NEGATIVE")
        }
    if(x ==0){
        console.log("NULL")
    }

}