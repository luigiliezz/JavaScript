import entradaDados from 'readline-sync';

let dia = entradaDados.questionInt(" Imforme o dia da semana (de 1 a 7): ");

switch (dia) {
    case 1:
        console.log(" Segunda-Feira")
        break;
    case 2:
        console.log(" Terça-Feira")
        break;
    case 3:
        console.log(" Quarta-Feira")
        break;
    case 4:
        console.log(" Quinta-Feira")
        break;
    case 5:
        console.log(" Sexta-Feira")
    case 6:
        console.log(" Sábado")
        break;
    case 7:
        console.log(" Domingo")        
        break;

    default:
        console.log(" Dia inexistente Burrão")
        break;
}


// codigo pro termina(node) chcp 65001