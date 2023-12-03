const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let grenais = 0;
let vitoriasInter = 0;
let vitoriasGremio = 0;
let empates = 0 ;
let resposta;                                       

function novoGrenal(){
const [golsInter, golsGremio] = lines.shift().split(' ').map(Number);
grenais ++;
if(golsInter > golsGremio) {
    vitoriasInter ++;
}else if(golsInter < golsGremio){
    vitoriasGremio ++;
}else{
    empates ++;
}
    console.log("Novo grenal (1-sim 2-nao)")
    resposta = lines.shift();
      if (resposta === '1'){
        novoGrenal();
      } else if (resposta === '2'){
        estatisticaDosGrenais();
    
      }
    }
function estatisticaDosGrenais(){
    console.log(grenais+" grenais");
    console.log("Inter:"+ vitoriasInter);
    console.log("Gremio:"+ vitoriasGremio);
    console.log("Empates:"+empates);
    if(vitoriasInter > vitoriasGremio){
        console.log("Inter venceu mais");
    }else if(vitoriasInter < vitoriasGremio){
        console.log("Gremio venceu mais");
    }else if(vitoriasInter === vitoriasGremio){
        console.log("Nao houve vencedor")
    }
} 
novoGrenal();