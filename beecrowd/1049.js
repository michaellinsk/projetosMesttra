const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//console.log(currentFile + '\\dev\\stdin');
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n'); 


const a = lines[0].split(" ");
const b = lines[1].split(" ");
const c = lines[2].split(" ");

if(a == "vertebrado" && b == "ave" && c == "carnivoro"){
    console.log("aguia");
}else
    if(a == "vertebrado" && b == "ave" && c == "onivoro"){
        console.log("pomba");
    }else
        if(a == "vertebrado" && b == "mamifero" && c == "onivoro"){
            console.log("homem");
}       else
            if(a == "vertebrado" && b == "mamifero" && c == "herbivoro"){
                console.log("vaca");
            }

if(a == "invertebrado" && b == "inseto" && c == "hematofago"){
    console.log("pulga");
}else
    if(a == "invertebrado" && b == "inseto" && c == "herbivoro"){
        console.log("lagarta");
    }else
        if(a == "invertebrado" && b == "anelideo" && c == "hematofago"){
            console.log("sanguessugar");
        }else
            if(a == "invertebrado" && b == "anelideo" && c == "onivoro"){
                console.log("minhoca");
            }