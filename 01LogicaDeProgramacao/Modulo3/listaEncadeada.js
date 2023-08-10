/*
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

//argument by value
//https://stackoverflow.com/questions/1009911/javascript-get-argument-value-and-name-of-passed-variable


//lista encadeada sem Class, usando apenas variaveis

let pessoa = {
    nome: 'nome',
    idade: 20,
    proximo: null
}
let cabeca = null

// tutorials - shallow and deep cloning
// https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
// https://stackoverflow.com/questions/67882939/how-to-copy-object-to-new-variable
// https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
//
// funcao para criar nova instancia, parecido com "new Class". Isso evita clonar os resultados (ler textos acima)
function criarNovaInstancia(pessoa){
    let novaInstancia = JSON.parse(JSON.stringify(pessoa))
    return novaInstancia
}

// criando variaveis distintas para serem adicionados como "filhos"
p1 = criarNovaInstancia(pessoa)
pessoa['nome'] = "nome2"
pessoa['idade'] = 25
p2 = criarNovaInstancia(pessoa)
pessoa['nome'] = 'nome3'
pessoa['idade'] = 30
p3 = criarNovaInstancia(pessoa)


// função para determinar quem vai ser a "cabeca" da lista
function determinarCabeca(pessoa){
    cabeca = pessoa
}

// função para alocar um filho na extremidade da lista
function alocarFilho(filho){
    // se a cabeça estiver vazia, retorna "falso" para indicar erro
    if (cabeca == null){ 
        return false
    }
    else{
        //uma variavel para armazenar o "nó" atual e avançar procurando seu filho
        let temporariaCabeca = cabeca
        while(temporariaCabeca['proximo'] != null){
            temporariaCabeca = temporariaCabeca['proximo']
        }
        // aloca o novo "filho" na extremidade da lista
        temporariaCabeca['proximo'] = filho
        return true
    }
}

/*
determinarCabeca(p1)
console.log(alocarFilho(p2))
console.log(alocarFilho(p3))
console.log(cabeca)
*/


// lista encadeada usando classe

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.proximo = null
    }
}

p1 = new Pessoa('nome', 20)
p2 = new Pessoa('nome2', 25)
p3 = new Pessoa('nome3', 30)


class listaEncadeada{
    constructor(cabeca = null){
        this.cabeca = cabeca
    }

    escolherCabeca(cabeca){
        this.cabeca = cabeca
    }

    adicionarNo(no){
        if(this.cabeca == null)
            return false
        else{
            let temporariaCabeca = this.cabeca

            while(temporariaCabeca.proximo != null)
                temporariaCabeca = temporariaCabeca.proximo

            temporariaCabeca.proximo = no
            return true
        }
    }
}

lista = new listaEncadeada()
lista.escolherCabeca(p1)
console.log(lista.adicionarNo(p2))
console.log(lista.adicionarNo(p3))

console.log(lista.cabeca)



/*
function criarNovaInstancia(pessoa, ...vetor){
    let novaInstancia = JSON.parse(JSON.stringify(pessoa))
    console.log(vetor)
    console.log(vetor.length)
}

criarNovaInstancia(pessoa, {a: 5}, {b: 7})

*/

