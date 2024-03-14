import entradaDados from 'readline-sync';

let nome =  entradaDados.question(" Informe seu nome: ");
console.log(`Olá, ${nome}!`)

let x = entradaDados.question("X: ");
let y = entradaDados.question("Y" );

console.log(`Total:${x+y}`);



s