/* exemplo de entrada de dados no console
const readlineSync = require('readline-sync');
 
// faz uma pergunta e guarda o resultado
var idade = readlineSync.question('Qual idade do usuario? ');
*/


/*
//primeiro realizar a escolha dos arquivos a serem atualizados
git add nomeDosArquivos // para todos os arquivos = git add .

//realizar commit pelo console
git commit -m "message"
*/


const leitor = require('readline-sync');
 
var idade = leitor.questionInt('Qual idade do usuario? ');

if (idade >= 18)
    console.log("Usuario possui permissão para dirigir")
else if(idade >= 16 && idade < 18)
    console.log("Usuario pode dirigir apenas com permissão dos pais")
else
    console.log("Usuario não possui permissão para dirigir")
    

//--------------------------------------------------------------------------------
//Observação para a (idade >= 18)    
switch(idade) {
    case (idade >= 18): //Nao funciona esta errado.  Switch apenas funciona com "fall-Through", como mostrado com 16 e 17
        console.log("Usuario possui permissão para dirigir");
        break;
    case 16:
    case 17:
        console.log("Usuario pode dirigir apenas com permissão dos pais")
        break;
    default:
        console.log("Usuario não possui permissão para dirigir")
}


//----------------------------------------------------------------------------------------------
var x = {
    'nome': 1,
    'proximo': null
}


// tutorials - shallow and deep cloning
// https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
// https://stackoverflow.com/questions/67882939/how-to-copy-object-to-new-variable
// https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/

function teste(a, y){
    let c = JSON.parse(JSON.stringify(a))
    console.log(c)
    c['nome'] = y
    return c
}

v = [teste(x,2),teste(x,5)]

console.log(v)


//----------------------------------------------------------------------------------------
//Informação extra
//caso precise saber o nome de uma variavel no programa, digitar "Object.keys({NOME})[0]" que o nome dela é mostrado
let teste = 5

console.log(Object.keys({teste})[0])
