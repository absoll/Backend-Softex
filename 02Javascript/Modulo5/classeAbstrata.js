/*
Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python. O método deve:

- Calcular três numeros complexos;
- realizar todas as operações básicas;
- e imprimir as propriedades 'real' e 'img' dos números
*/


// https://www.codecademy.com/article/goku-kun/introduction-to-adts-in-javascript
// https://www.geeksforgeeks.org/abstract-data-types/

class numerosComplexos {
    constructor(real, imaginario){
        this.real = real
        this.imaginario = imaginario
    }

    get real(){
        return this.real
    }

    get imaginario(){
        return this.imaginario
    }

    set real(novoValor){
        this.real = novoValor
    }

    set imaginario(novoValor){
        this.imaginario = novoValor
    }
}

class numeros {
    constructor(numero1, numero2 = 0){

    }
}





let a = '2i'
let b = '5i'

console.log(parseInt(a))