/*
IMPORTANTE:
https://oieduardorabelo.medium.com/javascript-for-vs-foreach-vs-for-in-vs-for-of-44b8beffbfa0

resumo: usar principalmente 'FOR' e 'FOR OF'. Alguns casos como o de ARROW FUNCTION, 'ForEach' sai melhor...
Evitar usar 'FOR IN', pior caso dos 4

Conclusão, segundo o site:
Geralmente, for..of é a maneira mais robusta de iterar em um array em JavaScript. É mais conciso que um for loop convencional e 
não tem tantos casos extremos como for..in e forEach(). A principal desvantagem de for..of é que você precisa fazer um trabalho 
extra para acessar o índice (1)‌, e você não pode encadear funções como você pode fazer em forEach(). forEach() vem com várias 
advertências e deve ser usado com moderação, mas há vários exemplos em que ele torna o código mais conciso.

*/

const usuarios = [
    {nome: 'nome1', idade: 10},
    {nome: 'nome2', idade: 20},
    {nome: 'nome3', idade: 30},
    {nome: 'nome4', idade: 40},
    {nome: 'nome5', idade: 50},
    {nome: 'nome6', idade: 60},
    {nome: 'nome7', idade: 70},
]

for(let i = 0; i < usuarios.length; i++)
    console.log(`O nome é ${usuarios[i].nome} e a idade é ${usuarios[i].idade}`)


for(let posicao in usuarios){
    console.log(`O nome é ${usuarios[posicao].nome} e a idade é ${usuarios[posicao].idade}`)
}

for(let item of usuarios)
    console.log(`O nome é ${item.nome} e a idade é ${item.idade}`)


//testes
const numeros = [[100, 200, 300], [400, 500, 600], [700, 800, 900]]

for(let i in numeros)
    for(let j in numeros[i])
    console.log("valor = "+ numeros[i][j])

for(let i of numeros)
    for(let j of i)
        console.log("valor = "+ j)