/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o 
valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada 
para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
*/

//clase para buscar, deveria ter todos os tipos de busca aqui dentro
class Busca{
    //construtor podendo receber VETOR e VELOR BUSCADo no momento da criação da classe ou alterado depois
    constructor(vetor = null, valorBuscado = null){
        this.vetor = vetor,
        this.valorBuscado = valorBuscado
    }

    // um metodo simples para tentar achar a melhor opção de busca
    // primeiro tenta o metodo mais rapido, busca binaria, caso verifique que o vetor nao esta organizado
    // encerra a execução e inicia a busca por busca linear
    melhorBusca(vetor = this.vetor, valor = this.valorBuscado){
        let resultado = this.buscaBinaria(vetor, valor)

        // resultado -3 na busca binaria = vetor nao ordenado
        if (resultado === -3)
            return this.buscaLinear(vetor, valor)
        else
            return resultado

    }

    // busca linear
    // retornos possiveis:
    // -2 = vetor nulo ou de posição 1
    // -1 = elemento nao encontrado
    // 0+ = posição do elemento no vetor
    buscaLinear(vetor = this.vetor, valor = this.valorBuscado){
        //caso o vetor tenha tamanho 0 ou 1, impossivel realizar a busca com apenas um numero ou "null"
        if(vetor.length === 0 || vetor.length === 1)
            return -2
        else{
            //vai de 1 em 1 posição no vetor procurando
            for(let i = 0; i < vetor.length; i++){
                if (vetor[i] === valor){
                    return i
                }
            }
            return -1
        }   
    }

    // busca binaria. Vetor tem que ta ordenado
    // retornos possiveis:
    // -3 = vetor nao ordenado
    // -2 = vetor nulo ou de posição 1
    // -1 = elemento nao encontrado
    // 0+ = posição do elemento no vetor
    buscaBinaria(vetor = this.vetor, valor = this.valorBuscado){
        if(vetor.length === 0 || vetor.length === 1)
            return -2
        else{
            //determina a posicao base, metade e limite no qual vai ser buscada no vetor
            let limite = vetor.length-1
            let base = 0
            let metade = Math.floor(base + limite/2)

            //enquanto a base for menor que o limite, vai continuar executando. Para a execução quando "inverter"
            // e a base ficar superior ao limite
            while(base <= limite){
                //metade vai ser sempre a posicao da base + posicao limite /2, para ter a media
                metade = Math.floor((base + limite)/2)           

                // caso um valor limite for menor que o valor base, significa que a base nao ta organizada e encerra a busca
                if (vetor[limite] < valor[base])
                    return -3

                //verifica se o valor da metade é igual ao valor escolhido, caso for, termina execução
                //caso o valor escolhido for maior que a metade, a posição base se torna a metade +1, excluindo todas as posições entre a base antiga e a metade antiga
                if(valor === vetor[metade]){
                    return metade
                }else if(valor > vetor[metade]){
                    base = metade + 1
                }else{
                    limite = metade - 1
                }
            }
            return -1
        }
        
    }
}


const vetor = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const vetorOrdenado = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30]
const valorBuscado = 20

const buscas = new Busca(vetor, valorBuscado)
//console.log(buscas.valorBuscado)
//console.log(buscas.vetor)
//console.log(buscas.buscaLinear())
//console.log(buscas.buscaBinaria(vetorOrdenado, valorBuscado))
console.log(buscas.melhorBusca(vetorOrdenado))




// link com outros tipos de buscas para tentar implementar nessa classe
// https://www.geeksforgeeks.org/searching-algorithms/#algo
