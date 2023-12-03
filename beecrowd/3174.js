function calcularPresentes(elfos) {
    let totalPresentes = 0;

    for (let i = 0; i < elfos.length; i++) {
        const elfo = elfos[i];

        switch (elfo.grupo) {
            case 'bonecos':
                totalPresentes += Math.floor(elfo.horas / 8);
                break;
            case 'arquitetos':
                totalPresentes += Math.floor(elfo.horas / 4);
                break;
            case 'musicos':
                totalPresentes += Math.floor(elfo.horas / 6);
                break;
            case 'desenhistas':
                totalPresentes += Math.floor(elfo.horas / 12);
                break;
            default:
                break;
        }
    }

    return totalPresentes;
}

// Exemplo de uso
const elfos = [
    { nome: 'Aradhel', grupo: 'bonecos', horas: 10 },
    { nome: 'Aerin', grupo: 'arquitetos', horas: 15 },
    { nome: 'Anna', grupo: 'musicos', horas: 10 },
    { nome: 'Elbereth', grupo: 'musicos', horas: 10 },
    { nome: 'Freda', grupo: 'desenhistas', horas: 15 },
    { nome: 'Arwen', grupo: 'bonecos', horas: 10 },
    { nome: 'Logolas', grupo: 'bonecos', horas: 10 }
];

const totalPresentes = calcularPresentes(elfos);
console.log(totalPresentes);
