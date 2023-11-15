// todo: Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

// MaiorAB = (a + b + abs(a-b)) / 2

// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

// Entrada
// O arquivo de entrada contém três valores inteiros.

// Saída
// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

let input = require('fs').readFileSync('./dev/14_oMaior.txt','utf8');
let lines = input.split(' ');

const ehMaior = (array) => {
    let maior = +lines.shift();
    
    while (array.length > 0) {
        let atual = +lines.shift();

        let calc = (maior + atual + Math.abs(maior-atual)) / 2;
        maior = calc

    }

    console.log(maior,'eh o maior');
}

ehMaior(lines)