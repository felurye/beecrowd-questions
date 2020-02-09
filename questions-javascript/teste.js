var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

var texto = "joão 1444?";
var er = /[^a-z]/gi;
texto = texto.replace(er, "");
console.log(texto);