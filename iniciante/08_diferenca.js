//todo: Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

const input = require('fs').readFileSync('./dev/08_diferencaEntrada.txt', 'utf8');
const lines = input.split('\n');

let [A, B, C, D] = lines;
console.log('DIFERENCA =', (+A * +B - +C * +D));