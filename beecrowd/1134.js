const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;

lines = lines.map(line => line.trim());
contAlcool = 0 ;
contGasolina = 0;
contDiesel = 0;

function imprimirDados(){
console.log("MUITO OBRIGADO")
console.log("Alcool: "+ contAlcool);
console.log("Gasolina: "+ contGasolina);
console.log("Diesel: " + contDiesel);

}


calculoCombustivel();
function calculoCombustivel() {

    for( i = 0; i < lines.length; i++){
      
      //  for(j = 0; j < lines[i].length; j++){
            const  tipoCombustivel = parseInt(lines[i]);
            if(tipoCombustivel == 1){
                contAlcool ++;
            }else 
                if(tipoCombustivel ==2){
                    contGasolina++;
                }
                else 
                    if(tipoCombustivel ==3){
                        contDiesel++;
                    }else
                        if(tipoCombustivel ==4){
                            imprimirDados();
                            break;
                        }else
                            if(tipoCombustivel<0 && tipoCombustivel>4){
                                calculoCombustivel();
            }                
        }
    }
