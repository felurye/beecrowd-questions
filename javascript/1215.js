/*Andy de apenas 8 anos tem um sonho - ele deseja criar o seu próprio dicionário. 
Isto não é uma tarefa fácil para ele, pois conhece poucas palavras. 
Bem, ao invés de pensar nas palavras que sabe, ele teve uma idéia brilhante. 
A partir do seu livro de histórias favorito, ele vai criar um dicionário com todas
as palavras distintas que existem nele. Ordenando estas palavras em ordem alfabética,
o trabalho estará feito. É claro, isso é uma tarefa que toma um certo tempo e portanto,
a ajuda de um programador de computador como você é muito bemvinda.

Você foi convidado a escrever um programa que liste todas as
diferentes palavras que existem em um texto. Neste caso, uma palavra
é definida como uma sequência de letras, maiúsculas ou minúsculas.
Palavras com apenas uma letra também deverão ser consideradas. Portanto,
seu programa deverá ser "CaSe InSeNsItIvE". Por exemplo, palavras como
"Apple", "apple" ou "APPLE" deverão ser consideradas como a mesma palavra.
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var teste = [];
while (lines.length > 0) {
    teste.push(lines.shift());
    console.log(teste);
}

let uniqueArray = teste.filter((este, i) => teste.indexOf(este) === i);
var er = /[^a-z ]/gi;

console.log(uniqueArray[0].replace(er, ''))