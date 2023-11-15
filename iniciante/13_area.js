// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.
// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída
// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

let input = require('fs').readFileSync('./dev/13_area.txt','utf8');
let lines = input.split(' ');

let [A, B, C] = [+lines[0], +lines[1], +lines[2]];

const triangulo = (a,c) => {
    console.log('TRIANGULO:', ((a * c) / 2).toFixed(3));
}

const circulo = (c) => {
    console.log('CIRCULO:', (3.14159 * c**2).toFixed(3));
}

const trapezio = (a,b,c) => {
    console.log('TRAPEZIO:', (((a + b) * c) / 2).toFixed(3));
}

const quadrado = (b) => {
    console.log('QUADRADO:', (b**2).toFixed(3));
}

const retangulo = (a,b) => {
    console.log('RETANGULO:', (a * b).toFixed(3));
}

triangulo(A,C);
circulo(C);
trapezio(A,B,C);
quadrado(B);
retangulo(A,B);