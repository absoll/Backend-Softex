/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

*/

const leitor = require("readline-sync")


/*
tentei bastante mas com o "question"... a biblioteca 'readline-sync' retorna uma funçãoa assincrona quando 
utilizado o "question", em vez do valor ja em string. Da pra testar se utilizar um numero em vez de string

//let opt = new Function(leitor.question("Digite a operação. + = soma, - = subtração, * = multiplicação, / = divisão"))

resposta:
function anonymous(
) {
2
}



por causa do problema acima, deve transformar o retorno em texto e inserir o leitor como "variavel". Caso seja 
inserido o leitor normal, como string junto do 'return', ele da erro pois o "leitor = require("readline-sync")" 
nao esta declarado dentro da função

+-+-+-+-+-+-+-+-+-  OBSERVAÇÃO   +-+-+-+--+
 notar que o valor entre (parenteses) equivale a `return '${variavel}'` (com aspas simples e crase)
//let opt = new Function(`return '${leitor.question("Digite a operação. + = soma, - = subtração, * = multiplicação, / = divisão")}'`)

caso queira ver a diferenca dos resultados acima, tirar esses comentarios. Para ter o valor em string, tem que ter os (parenteses), caso contrario, sai o corpo da função anonima
//console.log(opt+" sem parenteses") //corpo da função anonima
//console.log(opt()+" parenteses") //resultado digitado no leitor

*/


//Recebe o que tiver entre parenteses como texto e executa dentro da função. A mensagem final que tiver vai
//ser o retorno

// 1 - uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
let n1 = new Function(`return '${leitor.questionFloat("Digite o primeiro valor\n")}'`) 
let n2 = new Function(`return '${leitor.questionFloat("Digite o segundo valor\n")}'`)

let opt = new Function(`return '${leitor.question("Digite a operação. + = soma, - = subtração, * = multiplicação, / = divisão\n")}'`)


//2 - Função padrao usando a palavra reservada 'function'. Parametros de entrada (n1,n2,opt) e retorno em String
function calcular(n1, n2, opt){
    switch(opt) {
        case '+':
        case '-':
        case '*':
        case '/':
            //IF ternario para caso for uma divisão tambem mostrar o resto
            return (opt == '/')? (mensagemResultado(n1, n2, opt)+` Possuindo ${n1%n2} de resto.`) : mensagemResultado(n1, n2, opt)
        default:
            return "Operação invalida. Finalizando calculadora"
    }
}


//3 - arrow function. Função anonima sendo armazenada em variavel com parametros (n1,n2,opt) e retorno
const mensagemResultado = (n1, n2, opt) =>{
    let resultado = eval(n1+opt+n2) 

    // Util para caso tenha mais numeros depois do . mostrar apenas os dois finais
    // Tomar cuidado que essa conta remove todos os demais numeros depois do 3 numero após a virgula, perdendo eles
    // Foi utilizada para evitar o toFixed(2), pois se for uma divisao inteira, ele forçava aparecer os 0 após o .
    resultado = Math.round(resultado * 100) / 100 

    return `O resultado de ${n1}${opt}${n2} = ${resultado}.`
}



console.log(calcular(n1(), n2(), opt()))






