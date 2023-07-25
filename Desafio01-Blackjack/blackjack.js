const leitor = require("readline-sync")



let jogando = true

function menu(){
    console.log("----- Blackjack -----")
    console.log("1 - Iniciar jogo");
    console.log("0 - Sair")
    let opt = leitor.questionInt("Digite a opção: ");
    return opt
}

//funcao responsavel por gerar um numero randomico entre MIN e MAX
function random(min,max) {
    return Math.floor((Math.random())*(max-min+1))+min;
}

function somatorioVetor(vetor){
    let soma = 0;
    for(let i = 0;i < vetor.length;i++){
        soma += vetor[i]
    }
    return soma
}

function verificarEstourou(valor){
    if (valor > 21)
        return true
    else
        return false
}

function puxarCarta(vetor){
    vetor.push(random(1,13))
}


function jogar(){
    var nomeJogador = "asd"
    //let nomeJogador = leitor.question("Digite o seu nome: ")

    console.log("Bem-vindo ao jogo, ", nomeJogador);

    console.log("Distribuindo 2 cartas para ",nomeJogador,"...");
    let cartasJogador = [random(1,13), random(1,13)]

    console.log("Distribuindo 2 cartas para o computador...");
    let cartasBanco = [random(1,13), random(1,13)]

    let somatorioCartasJogador = somatorioVetor(cartasJogador)
    let somatorioCartasBanco = somatorioVetor(cartasBanco)

    while(!verificarEstourou(somatorioCartasJogador) || !verificarEstourou(somatorioCartasJogador)){
        console.log("Total de pontos do jogador: ",somatorioCartasJogador)
        opt = leitor.questionInt("Deseja puxar mais uma carta? 1 = SIM, 2 = NAO")

        if (opt === 1){
            puxarCarta(cartasJogador);
            somatorioCartasJogador = somatorioVetor(cartasJogador)
            console.log("A carta pouxada foi: ", cartasJogador[-1])
        }
        else
            break;
        
    }
    

    if (somatorioCartasJogador === somatorioCartasBanco)
        console.log("EMPATE!!! Tanto o jogador quanto o banco possuem ",somatorioVetor(cartasJogador),"pontos")
    else if(somatorioCartasJogador > somatorioCartasBanco)
        console.log("O BANCO ganhou!!! O banco possui ",somatorioCartasBanco," pontos e o jogador ",nomeJogador," possui ",somatorioCartasJogador," pontos.")
    else
        console.log(nomeJogador," ganhou!!! O banco possui ",somatorioCartasBanco," pontos e o jogador ",nomeJogador," possui ",somatorioCartasJogador," pontos.")
    


}



while(jogando){
    opt = menu()

    switch(opt){
        case 1:
            jogar()
            break;
        case 0:
            console.log("Espero que tenha se divertido no jogo")
            jogando = false
            break;
        default:
            console.log("Opçaõ invalida.")
    }
}
