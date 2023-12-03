const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');
lines = lines [0].split(" ");

let valor = parseFloat(lines[0]);

console.log("NOTAS:")
nota = 100
qtdeNotas = parseInt(valor/nota);
resto = valor % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 50
qtdeNotas = parseInt(resto/nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 20
qtdeNotas = parseInt(resto/nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 10
qtdeNotas = parseInt(resto/nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 5
qtdeNotas = parseInt(resto/nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 2
qtdeNotas = parseInt(resto/nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

console.log("MOEDAS:")
moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 1.00")
//para contornar o problema dos números fracionários
//estou multiplicando por 100 e arredondando
resto = parseInt(resto * 100)

//0,50 centavos
moeda = 50
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//25 centavos
moeda = 25
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//10 centavos
moeda = 10
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//5 centavos
moeda = 5
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )

//1 centavo
moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )