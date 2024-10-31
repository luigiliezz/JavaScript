//import entradaDados from 'readline-sync';

//let num = entradaDados.questionInt("Digite um número da tabuada");
//let cont = 0;
//while(cont <= 10) {
//    let resultado = num * cont;
//    console.log(`${num} x ${cont} = ${resultado}`);
//    cont++;
//}

import entradaDados from 'readline-sync';


let numAlunos = entradaDados.questionInt("Quantidade de alunos na turma: ");
let cont = 1;
let notaTotal = 0;

while (cont <= numAlunos) {
    let nota_1 = entradaDados.questionFloat("Nota do primeiro bimestre:");
    let nota_2 = entradaDados.questionFloat("Nota do segundo bimestre:");
    let nota_3 = entradaDados.questionFloat("Nota do terceiro bimestre:");
    let nota_4 = entradaDados.questionFloat("Nota do quarto bimestre:");
    let notaAluno = (nota_1 + nota_2 + nota_3 + nota_4)/4

    console.log(`A média deste aluno é: ${notaAluno}`)
    notaTotal += notaAluno
    cont++;
}

let media = notaTotal / numAlunos
console.log(`Média da sala: ${media}`)