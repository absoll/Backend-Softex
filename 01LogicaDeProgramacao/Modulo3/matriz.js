/*
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar 
informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, 
espécie e idade.
*/


//variaveis utilizadas
let tamanhoMatrizLinhas = 2
let tamanhoMatrizColunas = 3
let animais = []
//guarda o nome de cada caracteristica q o usuario deseja gravar. A questao pediu "nome", "especie" e "idade".
//caso o usuario deseje guardar uma nova caracteristica, como por exemplo "cor" basta apenas aumentar a quantidade
//de colunas e o programa vai pedir o nome para esssa nova caracteristica e logo embaixo o dado para essa informação
let nomeVariaveisColuna = []


const leitor = require('readline-sync');


//pede o nome das caracteristicas do animal que deseja guardar, facilita para caso queira aumentar a quantidade
//de caracteristicas do animal a serem guardadas sem alterar muito o codigo, apenas a variavel "tamanhoMatrizColunas"
//no inicio
console.log(`Os animais a serem cadastrados terão ${tamanhoMatrizColunas} caracteristicas.`)
for(let i = 0; i < tamanhoMatrizColunas; i++){
    let temporario = leitor.question(`Digite o nome da ${i+1} caracteristica do animal que voce deseja armazenar`)
    nomeVariaveisColuna.push(temporario)
}

//preenchendo a matriz. Utiliza a quantidade de "tamanhoMatrizColunas" para guardar cada informação, pegando o 
//nome das variaveis pela lista com seus nomes. Isso permite com apenas uma linha pergunta cada caracteristica 
//diferente
for(let i = 0; i < tamanhoMatrizLinhas; i++){
    animais.push([])
    for(let j = 0; j < tamanhoMatrizColunas; j++){
        let temporario = leitor.question(`Digite o ${nomeVariaveisColuna[j]} do ${i+1} animal`)
        animais[i].push(temporario)
    }
}

//mostrando os dados de cada linha e coluna individualmente, utilizando o nome da caracteristica guardada em 
//outro array
for(let i = 0; i < tamanhoMatrizLinhas; i++){
    for(let j = 0; j < tamanhoMatrizColunas; j++){
        console.log(`O ${i+1} animal tem o(a) ${nomeVariaveisColuna[j]} de ${animais[i][j]}`)
    }
}





//Informação extra
//caso precise saber o nome de uma variavel no programa, digitar "Object.keys({NOME})[0]" que o nome dela é mostrado
let teste = 5

console.log(Object.keys({teste})[0])