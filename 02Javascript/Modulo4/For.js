/*
Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles será composto por quatro 
propriedades: nome, idade, profissão e cidade.

Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utilize 'for in' e 
'for of' para que todos os objetos e propriedades sejam impressos.
*/
 let pessoa1 = {
    nome: 'nome1',
    idade: 10,
    profissao: 'profissao1',
    cidade: 'cidade1'
 }
 let pessoa2 = {
    nome: 'nome2',
    idade: 20,
    profissao: 'profissao2',
    cidade: 'cidade2'
 }
 let pessoa3 = {
    nome: 'nome3',
    idade: 30,
    profissao: 'profissao3',
    cidade: 'cidade3'
 }
 let pessoa4 = {
    nome: 'nome4',
    idade: 40,
    profissao: 'profissao4',
    cidade: 'cidade4'
 }

 //populando o array
 let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]


 let contador = 0 //contador para saber quantos elementos ja foi percorrido e dizer a quantidade
 for(elemento of pessoas){
    contador++
    console.log(`Dados da ${contador} pessoa: `)

    for(caracteristica in elemento)
        console.log(`${caracteristica}: ${elemento[caracteristica]}`)

    console.log("---------------")
 }
