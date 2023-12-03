const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 

linha = lines[0].split(' ');

salario = parseFloat(lines[0]);

if (salario >=0.00 && salario<=2000.00){
    console.log("Isento");
}else
    if(salario >=2000.01 && salario<=3000.00){
        imposto = (salario - 2000.00) *0.08
        console.log("R$ " + imposto.toFixed(2));
    }else
        if(salario >=3000.01 && salario<=4500.00){
            imposto = (salario - 3000.00) * 0.18 + (1000.00 * 0.08)
            console.log("R$ " + imposto.toFixed(2));
        }else
        if(salario >=4500.00){
            imposto = (salario - 4500.00) * 0.28 + (1500 * 0.18) + (1000.00 * 0.08)
            console.log("R$ " + imposto.toFixed(2));
        }    


