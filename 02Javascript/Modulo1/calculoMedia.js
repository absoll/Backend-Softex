/*
A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um programa JavaScript que 
calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser 
armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, 
some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma 
variável chamada media. Por fim, exiba esse valor no console usando a função console.log().
*/

const leitor = require('readline-sync');
 

function verificarNotaValida(n){
    let nota = leitor.questionFloat(`Digite a ${n} nota\n`)
    while(nota < 0 || nota > 10){
        nota = leitor.questionFloat("Nota invalida. Por favor digite novamente valores numericos entre 0 e 10\n")
    }

    return nota
}

console.log("Calculo de media de um aluno")
let nota1 = verificarNotaValida(1)
let nota2 = verificarNotaValida(2)
let nota3 = verificarNotaValida(3)

let media = (nota1 + nota2 + nota3)/3

console.log(`A media do aluno é ${media.toFixed(2)}`)