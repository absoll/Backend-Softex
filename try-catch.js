// 5 informações uteis javascript
//https://levelup.gitconnected.com/5-things-you-dont-know-about-try-catch-finally-in-javascript-5d661996d77c

//OBSERVAÇÂO IMPORTANTE
//se usar "let" no try ou catch, essa variavel nao vai ficar disponivel no catch/finally. 
//ela só se torna disponiveis nesses outros escopos se for "var", pois "let" é local no escopo, enquanto "var" é global

//IMPORTANTE
//caso tenha um RETURN no try,catch e finally, o mais "externo" é executado, ou seja, se o FINALLY tiver um RETURN, 
//ele que sera SEMPRE exeutado. Ele tem preferencia sobre o RETURN do TRY e do CATCH. 
//Da mesma forma, se o CATCH for executado, o RETURN do CATCH tem preferencia sobre o RETURN do TRY


const ler = require('readline-sync');
 

function menu(){
    console.log("Calculadora")
    console.log("1 - Somar")
    console.log("2 - Subtração")
    console.log("3 - Multiplicação")
    console.log("4 - Divisão")
    console.log("0 - Sair")
}


function dividir(){
    try{
        console.log("DIVISAO")
        let n1 = parseInt(ler.question("Digite o primeiro numero"))
        let n2 = parseInt(ler.question("Digite o primeiro numero"))

        //OBS: cada DOIS espaço entre os comentarios "//" representa as respostas de um novo tipo
        if(n2 === 0){
            //throw 'divisão por 0' //mandando uma mensagem simples em string


            //throw ['divisao por 0', `o primeiro valor foi ${n1}`] //mandando um vetor, visto CATCH receber apenas 1 variavel


            //throw new Error('divisão por 0') //Cria uma nova class "Error" e adiciona o "Error.message" para o valor em parentes. Construtor padrao do Error recebe isso


            throw new Error({'mensagem': 'divisão por 0', 'codError': '-2'}) //Cria uma nova class Error e adiciona esses dados. Nao muito util


            //throw {'message': 'divisão por 0', 'codError': '-2'} // Envia um dicionario ('JSON') para o catch e la pode trabalhar com ele


            //let erro = new Error('Divisao por 0');
            //erro.mensagem = "Dividiu um valor por 0";
            //erro.n1 = n1;
            //throw erro;
        }
        let resultado = n1/n2
        console.log(`Resultado de ${n1}/${n2}=${resultado}`)
    }catch(error){
        //console.log("Error: "+ error)


        //console.log("Error: "+ error)
        //console.log("Error[1]: "+ error[1])


        //console.log("Error: "+error)
        //console.log("Error.message: "+ error.message)


        console.log("Error: "+ error) // nao funciona, aparece "[object Object]", pois com o "+" o JS tenta transformar o objeto em string e esse é a saida padrao quando um objeto é transformado em string -> [object Object]
        console.log("Error com ,: ", error) // 'funciona'. O jeito correto de mostrar uma classe é através do "console.log()" é utilizando uma ","(virgula). Nao funciona pois o construtor da classe adiciona o dado dentro de "message", como foi passado um dicionario para essa variavel, deu erro
        console.log("Error.message: :", error['mensagem'])
        console.log(`Error: ${JSON.stringify(error.mensagem)}`)
        console.log(`Error: ${JSON.stringify(JSON.stringify(error.message))}`)


        //console.log("Error: " + error) // nao funciona
        //console.log("Error com ,: ", error) // funciona. Explicação de cima. Com objeto se usa o "," em vez do "+"
        //console.log("Error.message: ", error.message) // como é um "dicionario", acessa ele atraves de "."(ponto)
        //console.log(`Error com literal template: ${JSON.stringify(error)}`) //é necessario utilizar o "JSON.stringify()" para mostrar tudo do dicionario


        //console.log("Error: " + error) // mostra a mensagem enviada ao construtor no momento quando criou a classe Error la em cima
        //console.log("Error com ,: ", error) //mostra tudo que tiver dentro de erro, tanto os dados da classe quanto os dados adicionados no fim manualmente
        //console.log("Error.mensagem: ", error.mensagem)//aparece apenas o "mensagem" adicionado no fim, após criar a classe Error
        //console.log("Error.n1: "+ error.n1)//Ele consegue armazenar alguma variavel utilizada no TRY para ser usado no Catch, sem precisar declar "var" no lugar de "let"
        //console.log("Error.message: ", error.message) // é o valor enviado ao construtor no momento da criação da classe "Error". O que tiver dentro do parenteses vai para "message"


        console.log("entrou aqui")

        var teste = 5 //Unica forma de uma variavel viajar dentro de try/catch/finally é se usar o "var"
    }finally{
        console.log("Divisao finalizada")
        console.log(teste) // isso vai funcionar, visto que existe "var teste" anteriormente. Caso fosse "let", daria erro pois a variavel nao existe
    }
    
}

do{
    menu()
    var opt = ler.questionInt("Escolha uma opção")

    switch(opt){
        case 1:
            console.log("Digitou 1")
            break;
        case 2:
            console.log("Digitou 2")
            break;
        case 3:
            console.log("Digitou 3")
            break;
        case 4:
            console.log("Digitou 4")
            dividir()
            break;
        case 0:
            console.log("Digitou 0")
            break

        default:
            console.log("Opcao invalida")
    }
}while(opt != 0)
console.log("Calculadora")