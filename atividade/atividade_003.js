import entradaDados from 'readline-sync'

let num = entradaDados.questionFloat(' Digite um número:')
let num_2 = entradaDados.questionFloat(' Digite o segundo número')
let operacao = entradaDados.questionFloat(' Qual operacao deseja usar ? (+, -, /, *):')

switch (operacao) {
    case "+":
        console.log(`Resultado: ${num + num_2}`)
        break;
    case "-":
        console.log(`Rsultado: ${num - num_2} `)
        break;
    case "/":
        console.log(`Rsultado: ${num / num_2}`)       
        break;
    case "*":
        console.log(`Resultado: ${num * num_2}`)
        break;
    default:
        console.log(`Digita um número certo mundrungo!`)
        break;
}