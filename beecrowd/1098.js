const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;


    
for (let i = 0; i <= 2; i += 0.2) {
    for (let j = 1; j <= 3; j++) {
            console.log("I=" + formatarValor(i) + " J=" + formatarValor(i +j));
        
    }
}

function formatarValor(valor){
    valor =Number(valor.toFixed(1));
    
    let valor2 = parseInt(valor);

     if ((valor - valor2) == 0) {
    return valor.toFixed(0) 

    }else{
   return valor.toFixed(1);   

    }
}