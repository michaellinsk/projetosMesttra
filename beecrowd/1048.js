const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

salario = parseFloat(lines[0]);

if(salario >=0 && salario <=400.00){
    reajuste = (salario * 15) /100;
    novoSalario = salario + reajuste;
    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 15 %");
}else
    if(salario >= 400.01 &&salario <=800.00){
        reajuste = (salario * 12) /100;
        novoSalario = salario + reajuste;
        console.log("Novo salario: " + novoSalario.toFixed(2));
        console.log("Reajuste ganho: " + reajuste.toFixed(2));
        console.log("Em percentual: 12 %");
    }else
        if(salario >= 800.01 &&salario <=1200.00){
            reajuste = (salario * 10) /100;
            novoSalario = salario + reajuste;
            console.log("Novo salario: " + novoSalario.toFixed(2));
            console.log("Reajuste ganho: " + reajuste.toFixed(2));
            console.log("Em percentual: 10 %");
        } else
            if(salario >= 1200.01 &&salario <=2000.00){
                reajuste = (salario * 7) /100;
                novoSalario = salario + reajuste;
                console.log("Novo salario: " + novoSalario.toFixed(2));
                console.log("Reajuste ganho: " + reajuste.toFixed(2));
                console.log("Em percentual: 7 %");
            }else
                if(salario >2000.00){
                    reajuste = (salario * 4) /100;
                    novoSalario = salario + reajuste;
                    console.log("Novo salario: " + novoSalario.toFixed(2));
                    console.log("Reajuste ganho: " + reajuste.toFixed(2));
                    console.log("Em percentual: 4 %");
                }