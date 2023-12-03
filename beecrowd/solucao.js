//importo o módulo fs (filesystem) para trabalhar com arquivos e diretórios
var input = require('fs').readFileSync(currentFile)

//importo o módulo path para trabalhar com o endereço de arquivos e diretórios
const endereco = require('caminho');

//descobre o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let linhas = conteudoArquivo.split(quebraLinhaWindows);

//////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE////////////////// /
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//deixe [var1, var2, var3, var4] = linhas.shift().split(" ");

//para ler linhas com um valor único na mesma linha use o comando a seguir
deixe valor = linhas.shift();

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
console.log(qtdeMoedas + "moeda(s) de R$ 1,00")

//para contornar o problema dos números fracionários
//estou multiplicando por 100 e arredondando
resto = parseFloat(resto * 100)

//0,50 centavos
moeda = 50
qtdeMoedas = parseFloat(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//25 centavos
moeda = 25
qtdeMoedas = parseFloat(resto / moeda);
resto = resto % moeda;
console.log(Math.floor(qtdeMoedas) + " moeda(s) de R$ 0." + moeda )

//10 centavos
moeda = 10
qtdeMoedas = parseFloat(resto / moeda);
resto = resto % moeda;
console.log(Math.floor(qtdeMoedas) + " moeda(s) de R$ 0." + moeda )

//5 centavos
moeda = 5
qtdeMoedas = parseFloat(resto / moeda);
resto = resto % moeda;
console.log(Math.floor(qtdeMoedas) + " moeda(s) de R$ 0,0" + moeda )

//1 centavo
moeda = 1
qtdeMoedas = parseFloat(resto / moeda);
resto = resto % moeda;
console.log(Math.floor(qtdeMoedas) + " moeda(s) de R$ 0,01" + moeda )