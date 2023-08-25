/*
Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, 
você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js", teste e 
tire um print.

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
    default:
        console.log("Operação invalida. Finalizando calculadora")
        break;
}