/*
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o 
aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador 
de atribuição e um operador ternário.

O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele 
deve tirar na próxima prova para poder passar com nota sete.

*/

const leitor = require('readline-sync');
 

function verificarNotaValida(n){
    let nota = leitor.questionFloat(`Digite a ${n} nota\n`)
    while(nota < 0 || nota > 10){
        nota = leitor.questionFloat("Nota invalida. Por favor digite novamente valores numericos entre 0 e 10\n")
    }

    return nota
}

function resultadoNotas(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3
    console.log(`A media do aluno é ${media.toFixed(2)}`)

    return (media >=7) ? "Aluno aprovado": "Aluno reprovado" //os valores sao sempre RETORNADOS, ou seja, tem um "return" implicito em cada lado do IF TERNARIO
}

console.log("Calculo de media de um aluno")
let nota1 = verificarNotaValida(1)
let nota2 = verificarNotaValida(2)
let nota3 = verificarNotaValida(3)

console.log(resultadoNotas(nota1, nota2, nota3))


function notaNecessariaPassarPorMedia(nota1, nota2){
    let notaNecessaria = 21 - nota1 - nota2 // sendo (n1+n2+n3)/3 = 7a formula, se isolar-mos o n3, o resultado vai ser n3 = 21 -n1 - n2

    return notaNecessaria
}

console.log("Calculo da terceira nota necessaria pelo aluno para passar com 7")
let n1 = verificarNotaValida(1)
let n2 = verificarNotaValida(2)

let n3 = notaNecessariaPassarPorMedia(n1,n2)

console.log(`Para o aluno passar com media 7, ele precisaria tirar ${n3.toFixed(2)} na terceira nota.`)