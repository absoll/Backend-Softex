/*
Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis;
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

*/
const leitor = require("readline-sync")

let n1 = leitor.questionFloat("Digite o primeiro valor")
let n2 = leitor.questionFloat("Digite o segundo valor")

let opt = leitor.question("Digite a operação. + = soma, - = subtração, * = multiplicação, / = divisão ")

switch(opt) {
    case '+':
        console.log(`O resultado de ${n1} + ${n2} = ${n1+n2}`)
        break;
    case '-':
        console.log(`O resultado de ${n1} - ${n2} = ${n1-n2}`)
        break;
    case '*':
        console.log(`O resultado de ${n1} * ${n2} = ${n1*n2}`)
        break;
    case '/':
        console.log(`O resultado de ${n1} / ${n2} = ${(n1/n2).toFixed(2)}. Possuindo ${n1%n2} de resto`)
        break;
        break;
    default:
        console.log("Operação invalida. Finalizando calculadora")
        break;

}

