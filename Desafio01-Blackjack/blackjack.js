const leitor = require("readline-sync")



let jogando = true
const DIFICULDADE = {
    'FACIL': 75,
    'MEDIO': 50,
    'DIFICIL': 25
}


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
    let cartaPuxada = random(1,13)
    vetor.push(cartaPuxada)
    return cartaPuxada
}


function jogar(){
    var nomeJogador = "asd"
    //let nomeJogador = leitor.question("Digite o seu nome: ")

    console.log("Bem-vindo ao jogo, ", nomeJogador);

    //gerando cartas randomicas para o jogador entre 1(A) e 13(K)
    console.log("Distribuindo 2 cartas para ",nomeJogador,"...");
    let cartasJogador = [random(1,13), random(1,13)]

    console.log("Distribuindo 2 cartas para o computador...");
    let cartasBanco = [random(1,13), random(1,13)]

    //realizando o somatorio de todas as cartas puxadas pelo banco e pelo jogador
    let somatorioCartasJogador = somatorioVetor(cartasJogador)
    let somatorioCartasBanco = somatorioVetor(cartasBanco)

    //Caso o jogador nao tenha estourado, possibilita ele puxar mais uma carta
    while(!verificarEstourou(somatorioCartasJogador)){
        console.log("Total de pontos do jogador: ",somatorioCartasJogador)
        opt = leitor.questionInt("Deseja puxar mais uma carta? 1 = SIM, 2 = NAO")

        //caso ele aceite puxar mais uma carta, a carta é puxada e motrada seu valor, caso nao, encerra a opcao do jogador puxar uma carta
        if (opt === 1){
            let cartaPuxada = puxarCarta(cartasJogador);
            somatorioCartasJogador = somatorioVetor(cartasJogador)
            console.log("A carta puxada foi: ", cartaPuxada)
        }
        else
            break;
        
    }
    

    //mostra o resultado final... Caso o jogador e banco tenha o mesmo, da empate para ambos
    //Caso o jogador tenha estourado ou tenha menos pontos que o banco, o banco vence
    //caso nao ocorra ennum desses, o jogador vence 
    if (somatorioCartasJogador === somatorioCartasBanco )
        console.log("EMPATE!!! Tanto o jogador quanto o banco possuem ",somatorioVetor(cartasJogador),"pontos")
    else if(somatorioCartasJogador < somatorioCartasBanco || somatorioCartasJogador > 21)
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
