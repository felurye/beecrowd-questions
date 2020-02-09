/*Paulinho tem em suas mãos um novo problema. Agora a sua professora
lhe pediu que construísse um programa para verificar, à partir de
dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.
*/


var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

// Faz a leitura do número de casos testes que rodará
let n = Number(lines.shift());
let valores = [];

for (let i = 0; i < n; i++) {
    let tamanhoA;
    let tamanhoB;
    let A;
    let B;

    /* Lê linha por linha a cada interação do 'for'
     * separando dentro do Objeto sempre que encontra
     * uma espaço ' ' no array.
    */
    valores.push((String(lines.shift())).split(' '));

    /* Atribui as variáveis o valor de cada indice do
     * array, de modo a deixar o código mais legível.
     * Também recebe o tamanho de cada string, para
     * reazilar os cálculos necessários. O replace
     * serve para remover um caracter de escape que 
     * o JavaScript atribui ao final de cada linha lida.
    */
    A = valores[i][0];
    B = valores[i][1].replace('\r', '');
    tamanhoA = A.length;
    tamanhoB = B.length;

    /* IF para verificar se o valor recebido é maior que 0 e se
     * o tamanho da string é menor ou igual a 1000, como exigido
     * no exercício. 
    */
    if (Number(A) > 0 && Number(B) > 0 && tamanhoB <= 1000 && tamanhoA <= 1000) {
        /* Se o tamanho da variável B for maior que a de A
         * já prova que o final de A não equivale a B, logo
         * não encaixa.
        */
        if (tamanhoB > tamanhoA) {
            console.log('nao encaixa');
        } else {
            /* A função substring é responsável por pegar exatamente a
             * quantidade de caracteres do final da string de A equivalente
             * ao tamanho de B, logo após faz a comparação dos valores, em
             * casos positivos imprime 'encaixa', senão, 'nao encaixa'.
            */
            A = A.substring(tamanhoA, (tamanhoA - tamanhoB));
            if (Number(A) === Number(B)) {
                console.log('encaixa');
            } else {
                console.log('nao encaixa');
            }
        }
    }
}