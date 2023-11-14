//todo: Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

//! Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

//! Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

let input = require('fs').readFileSync('./dev/11_calculoSimples.txt', 'utf8');
let lines = input.split('\n');

let produto1 = lines.shift().split(' ');
let produto2 = lines.shift().split(' ');

let produtos = [produto1, produto2];

const pagar = (array) => {
    let soma = 0;
    array.forEach((line) => {
        let [codigo, quantidade, valor] = line;
        soma += +quantidade * +valor;
    });
    return soma;
};

valor = pagar(produtos);
console.log('VALOR A PAGAR: R$', valor.toFixed(2));


// var soma = 0;
// while (lines.length > 0) {
//     let produto = lines.shift().split(' ');
//     let [codigo, quantidade, valor] = produto;
//         soma += +quantidade * +valor;
// }
// console.log('VALOR A PAGAR: R$', soma.toFixed(2));