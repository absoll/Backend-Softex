/*
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao 
terminar, imprima novamente todas as informações das três listas.
*/

let nomes =  ['nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6', 'nome7', 'nome8', 'nome9', 'nome10']
let idades =  [20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
let cores = ['cor1', 'cor2', 'cor3', 'cor4', 'cor5', 'cor6', 'cor7', 'cor8', 'cor9', 'cor10']

function imprimir(){
    //imprimindo cada variavel dentro do array
    for (chave in nomes){
        console.log(chave)
    }
    //imprimindo todo o array
    console.log(nomes)


    console.log(idades)
    console.log(cores)
}

imprimir()

//escolhe uma posicao aleatoria entre 0 e 9
nomes[Math.floor(Math.random() * 10)] = "NOME ALTERADO"

// escolhe um numero aleatorio entre 1 e 100, mas mantem as varias casas decimais
//idades[Math.floor(Math.random() * 10)] = Math.random() * 100 

//escolhe a posicao em um numero entre 0 e 9
//escolhe um numero entre 1 e 100, mas mantem apenas 2 casas decimais. Arredonda para cima ou para baixo
//dependendo do numero
//https://java2blog.com/round-to-2-decimal-places-javascript/
idades[Math.floor(Math.random() * 10)] = Math.round((Math.random() + Number.EPSILON)*100)

cores[Math.floor(Math.random() * 10)] = "COR ALTERADA"

imprimir()