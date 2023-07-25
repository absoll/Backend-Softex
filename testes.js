/* exemplo de entrada de dados no console
const readlineSync = require('readline-sync');
 
// faz uma pergunta e guarda o resultado
var idade = readlineSync.question('Qual idade do usuario? ');

//realizar commit pelo console
git commit -m "MESSAGE"
*/
const leitor = require('readline-sync');
 
var idade = leitor.questionInt('Qual idade do usuario? ');

if (idade >= 18)
    console.log("Usuario possui permissão para dirigir")
else if(idade >= 16 && idade < 18)
    console.log("Usuario pode dirigir apenas com permissão dos pais")
else
    console.log("Usuario não possui permissão para dirigir")