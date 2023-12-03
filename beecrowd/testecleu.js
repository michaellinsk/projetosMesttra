function main() {
    // Leitura dos 20 números inteiros
    let vetor = [];
    for (let i = 0; i < 20; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        vetor.push(num);
    }

    // Solicitação do valor de referência
    let valorReferencia = parseInt(prompt("Digite um valor de referência inteiro:"));

    // a) Imprime os números do vetor que são maiores que o valor de referência
    console.log("\nNúmeros no vetor maiores que o valor de referência:");
    for (let num of vetor) {
        if (num > valorReferencia) {
            console.log(num);
        }
    }

    // b) Imprime os números do vetor que são menores que o valor de referência
    console.log("\nNúmeros no vetor menores que o valor de referência:");
    for (let num of vetor) {
        if (num < valorReferencia) {
            console.log(num);
        }
    }

    // c) Retorna quantos números no vetor são maiores que o valor de referência
    let countMaiores = vetor.filter(num => num > valorReferencia).length;
    console.log(`Quantidade de números no vetor maiores que o valor de referência: ${countMaiores}`);

    // d) Retorna quantas vezes o valor de referência aparece no vetor
    let countReferencia = vetor.filter(num => num === valorReferencia).length;
    console.log(`Quantidade de vezes que o valor de referência aparece no vetor: ${countReferencia}`);
}

// Chama a função principal
main();
