const leitor = require('readline-sync');

//lista de candidatos
const Candidatos = {
    889: "candidato_X",
    847: "candidato_Y",
    515: "candidato_Z",
    0: "branco"
  };

const NULO = -1

let opt;
let votos = {
    [NULO]: 0 //para aceitar o valor da constante, usa o []
};
  
//preenche um dicionario com o numero de cada candidato do "enum" e inicializa com 0
for (chave in Candidatos)
    votos[chave] = 0;


//repetição para as votações
do{
    console.log("Iniciando sua votação...");
    
    //verifica se o usuario digita um numero valido (nao letra e acima de 0)
    let numeroVotado;
    while(true){
            numeroVotado = leitor.questionInt("Digite o numero do seu candidato. 0 (zero) para voto em branco.\n");
            if(numeroVotado < 0)
                console.log("Insira um numero valido");
            else
                break;
    }

    //insere os votos de acordo com os candidatos. Utiliza o valor constante de NULO declarado inicialmente
    if (numeroVotado in Candidatos){
    votos[numeroVotado] = votos[numeroVotado] + 1
    }
    else{
    votos[NULO] = votos[NULO] + 1
    }
    console.log("Voto computado.")

    opt = leitor.questionInt("Deseja votar novamente? 1 - sim, qualquer outro valor - nao\n")
}while(opt === 1)

console.log("Calculando votos...\n")
//guarda a maior quantidade de votos e o numero daquele candidato
let maisVotadoNumeroVotos = 0
let maisVotadoNumeroCandidato = 0

for(chave in Candidatos){
   //Para evitar o mais votado ser BRANCO, checa se  chave equivale a 0 valor permanente para BRANCO
    if(chave == 0)
        continue
    
    //verifica se aquele candidato é o mais votado. Caso for, ele assume o nome do candidato e os votos do mais votado
    if (votos[chave] > maisVotadoNumeroVotos){
        maisVotadoNumeroCandidato = chave;
        maisVotadoNumeroVotos = votos[chave]
    }// caso ocorra algum empate, para ser mostrado no final o empate, a chave dos candidatos sao concatenadas por ESPAÇO
    else if (votos[chave] == maisVotadoNumeroVotos){
        maisVotadoNumeroCandidato = maisVotadoNumeroCandidato + " " + chave
    }
}

//Separa os numeros dos mais votados para poder mostrar na tela, isso é necessario especialmente para quando há empate entre eles
maisVotadoNumeroCandidato = maisVotadoNumeroCandidato.split(' ');

//se tiver apenas 1 candidato mais votado, perfeito, ele é o vencedor e mostra o nome dele
if(maisVotadoNumeroCandidato.length == 1){
    console.log(`PARABENS!!!! ${maisVotadoNumeroCandidato[0]} - ${Candidatos[maisVotadoNumeroCandidato[0]]} ganhou a eleição com ${votos[maisVotadoNumeroCandidato[0]]} votos!!`)
}
else{//caso ocorra empate entre os candidatos, o nome e numero deles sao mostrados, alem da quantidade de votos deles
    console.log("HOUVE EMPATE ENTRE:")
    for(chave in maisVotadoNumeroCandidato){
        console.log(`${maisVotadoNumeroCandidato[chave]} - ${Candidatos[maisVotadoNumeroCandidato[chave]]}`)
    }
    console.log(`total de votos deles: ${maisVotadoNumeroVotos}\n`)
}

console.log("Listagem geral:");
console.log("Numero - Nome - Votos");
for(chave in Candidatos){
    console.log(`${chave} - ${Candidatos[chave]} - ${votos[chave]}`)
}
console.log(`${NULO} - NULO - ${votos[NULO]}`)
