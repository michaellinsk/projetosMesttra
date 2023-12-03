const path = require('path');
const currentFile = path.dirname(process.argv[1]);

// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');exports.lines = lines;


let senhaCorreta = 2002;
let senha;
do{
    senha =Number(lines.shift());
        if(senha !== senhaCorreta){
            console.log("Senha Invalida");
    }

}while(senha !== senhaCorreta);

    console.log("Acesso Permitido");



