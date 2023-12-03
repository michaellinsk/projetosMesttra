const path = require('path');
const currentFile = path.dirname(process.argv[1]);
// realiza a leitura das linhas no arquivo \dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
const lines = input.trim().split('\r\n');

// Crie vinte e seis variáveis inteiras
let a = 97;
let b = a + 1;
let c = b + 1;
let d = c + 1;
let e = d + 1;
let f = e + 1;
let g = f + 1;
let h = g + 1;
let i = h + 1;
let j = i + 1;
let k = j + 1;
let l = k + 1;
let m = l + 1;
let n = m + 1;
let o = n + 1;
let p = o + 1;
let q = p + 1;
let r = q + 1;
let s = r + 1;
let t = s + 1;
let u = t + 1;
let v = u + 1;
let w = v + 1;
let x = w + 1;
let y = x + 1;
let z = y + 1;

// Função para imprimir os valores
function imprimirValores(letra, valor) {
    console.log(`${valor} e ${letra}`);
}
imprimirValores('a', a);
imprimirValores('b', b);
imprimirValores('c', c);
imprimirValores('d', d);
imprimirValores('e', e);
imprimirValores('f', f);
imprimirValores('g', g);
imprimirValores('h', h);
imprimirValores('i', i);
imprimirValores('j', j);
imprimirValores('k', k);
imprimirValores('l', l);
imprimirValores('m', m);
imprimirValores('n', n);
imprimirValores('o', o);
imprimirValores('p', p);
imprimirValores('q', q);
imprimirValores('r', r);
imprimirValores('s', s);
imprimirValores('t', t);
imprimirValores('u', u);
imprimirValores('v', v);
imprimirValores('w', w);
imprimirValores('x', x);
imprimirValores('y', y);
imprimirValores('z', z);
