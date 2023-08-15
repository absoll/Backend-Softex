function fat(n){
    if (n === 1 || n === 0)
        return 1
    else
        return n * (n-1)
}


const numero = 6
console.log(`O fatorial de ${numero} é ${fat(numero)}`)

function somaRecursiva(n){
    if (n === 1)
        return 1
    else
        return n + somaRecursiva(n-1)

}
const n = 6
console.log(`A soma recursiva de ${n} é ${somaRecursiva(n)}`)


function fibonnaci(n){
    if (n === 1)
        return 0
    if (n === 2)
        return 1
    else
        return fibonnaci(n-1) + fibonnaci(n-2)
}

const fibo = 7
console.log(`O elemento ${fibo} da sequencia de fibonaci é ${fibonnaci(fibo)}`)