const leitor = require('readline-sync')


function menu(){
    //console.clear()
    console.log("----- MENU -----")
    console.log("0 - Sair")
    console.log("1 - Listar todos os aluno")
    console.log("2 - Cadastrar aluno")
    console.log("3 - Buscar aluno")
    console.log("4 - Alterar aluno")
    console.log("5 - Apagar aluno")
}

function buscarAlunoEspecifico(id){
    let resultado = undefined
    for(let i = 0;i < listaAlunos.length;i++){
        if (id == listaAlunos[i].matricula)
            resultado = listaAlunos[i]
    }

    return resultado
}

const estruturaAlunoPadrao = {
    matricula: 0,
    nome: '50',
    notas: 3
}

const aluno1 = {
    matricula: 1,
    nome: "Aluno 1",
    notas: [8, 9, 10]
}

const aluno2 = {
    matricula: 2,
    nome: "Aluno 2",
    notas: [5, 6, 7]
}

let listaAlunos = [aluno1, aluno2]


var opt;
do{
menu()
opt = leitor.questionInt("Escolha uma opção")
switch(opt){
    case 0: console.log("Saindo do sistema...")
            break
    case 1: console.log("----- LISTANDO TODOS OS ALUNOS ----")
            for(aluno of listaAlunos){
                console.log(`Matricula: ${aluno.matricula}`)
                console.log(`Nome: ${aluno.nome}`)
                let somatorio = 0
                for(let i = 0; i < aluno.notas.length; i++){
                    console.log(`Nota ${i+1}: ${aluno.notas[i].toFixed(2)}`)
                    somatorio += aluno.notas[i]
                }
                media = somatorio / aluno.notas.length
                console.log(`Media: ${media.toFixed(2)}\n`)
            }
            console.log("Aperte qualquer tecla para voltar ao menu...")
            leitor.keyIn()
            console.clear()
            break
    case 2: console.log("----- CADASTRO ALUNO -----")
            let novaMatricula = listaAlunos[listaAlunos.length - 1].matricula + 1
            let nome = leitor.question("Digite o nome do novo Aluno: ")
            let notas = []
            for (let i = 0;i < estruturaAlunoPadrao.notas ; i++){
                let temporario = leitor.questionFloat(`Digite a ${i+1} nota do aluno: `)
                notas.push(temporario)
            }

            let estruturaAlunoNova = estruturaAlunoPadrao
            estruturaAlunoNova.nome = nome
            estruturaAlunoNova.matricula = novaMatricula
            estruturaAlunoNova.notas = notas

            listaAlunos.push(estruturaAlunoNova)
            
            console.log(`Aluno adicionado com sucesso.`)
            console.log("Aperte qualquer tecla para voltar ao menu...")
            leitor.keyIn()
            console.clear()
            break
    case 3: console.log("----- BUSCAR ALUNO -----")
            let id = leitor.questionInt("Digite o numero de matricula do aluno a ser buscado: ")

            let resultado = buscarAlunoEspecifico(id)

            if(resultado != undefined){
                console.log("Aluno encontrado!")
                console.log(`Matricula: ${resultado.matricula}`)
                console.log(`Nome: ${resultado.nome}`)
                let somatorio = 0
                for(let i = 0;i < resultado.notas.length;i++){
                    console.log(`Nota ${i+1}: ${resultado.notas[i].toFixed(2)}`)
                    somatorio += resultado.notas[i]
                }
                let media = somatorio / resultado.notas.length
                console.log(`Media: ${media.toFixed(2)}`)
            }
            else{
                console.log("Numero de matricula não encontrado")
            }

            console.log("Aperte qualquer tecla para voltar ao menu...")
            leitor.keyIn()
            console.clear()
            break
    case 4: console.log("---- ALTERAR ALUNO -----")
            let id2 = leitor.questionInt("Digite o numero de matricula do aluno a ser editado: ")

            let resultado2 = buscarAlunoEspecifico(id)

            console.log("Aperte qualquer tecla para voltar ao menu...")
            leitor.keyIn()
            console.clear()
            break
    
    default: console.log("Opção invalida... digite novamente")
}
}while(opt != 0)