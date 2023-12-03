// const path = require('path');
// const currentFile = path.dirname(process.argv[1]);

// // realiza a leitura das linhas no arquivo \dev\stdin
// var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
// var lines = input.split('\r\n');




// console.log("---------------------------------------")
// console.log("| decimal   |  octal  |  Hexadecimal  |")
// console.log("---------------------------------------")
// console.log("|      0    |    0    |       0       |")
// console.log("|      1    |    1    |       1       |")
// console.log("|      2    |    2    |       2       |")
// console.log("|      3    |    3    |       3       |")
// console.log("|      4    |    4    |       4       |")
// console.log("|      5    |    5    |       5       |")
// console.log("|      6    |    6    |       6       |")
// console.log("|      7    |    7    |       7       |")
// console.log("|      8    |   10    |       8       |")
// console.log("|      9    |   11    |       9       |")
// console.log("|     10    |   12    |       A       |")
// console.log("|     11    |   13    |       B       |")
// console.log("|     12    |   14    |       C       |")
// console.log("|     13    |   15    |       D       |")
// console.log("|     14    |   16    |       E       |")
// console.log("|     15    |   17    |       F       |")
// console.log("---------------------------------------")

// console.log("---------------------------------------");
// console.log("| decimal   |  octal  |  Hexadecimal  |");
// console.log("---------------------------------------");

// for (let i = 0; i <= 15; i++) {
//     const decimalValue = i;
//     const octalValue = i.toString(8);
//     const hexadecimalValue = i.toString(16).toUpperCase();

//     console.log(`|${" ".repeat(6 - decimalValue.toString().length)}${decimalValue}    |${" ".repeat(6 - octalValue.toString().length)}${octalValue}    |${" ".repeat(13 - hexadecimalValue.toString().length)}${hexadecimalValue}    |`);
// }


console.log("---------------------------------------");
console.log("|  decimal   | octal  |  Hexadecimal  |");
console.log("---------------------------------------");

for (let i = 0; i <= 15; i++) {
    const decimalValue = i;
    const octalValue = i.toString(8);
    const hexadecimalValue = i.toString(16).toUpperCase();

    if (i === 0) {
        console.log("|      0    |    0    |       0       |");
    } else {
        console.log(`|${" ".repeat(6 - decimalValue.toString().length)}${decimalValue}    |${" ".repeat(6 - octalValue.toString().length)}${octalValue}    |${" ".repeat(16 - hexadecimalValue.toString().length)}${hexadecimalValue}    |`);
    }

    if (i === 15) {
        console.log("---------------------------------------");
    }
}