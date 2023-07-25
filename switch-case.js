/*sintaxe

switch(EXPRESSAO) {
    case "OPT":
        ...
        break;
    case OPT:
        ...
        break;
    default:
        ...
        break;

}


OBSERVACAO:

sao similares, a diferença é que em alguns idiomas (como o Turco), UpperCase e LowerCase são diferentes. Então o "toLocale"
utiliza o idioma da maquina do usuario. Então... RECOMENDADO = toLocaleLowerCase()

string.toLowerCase()
string.toLocaleLowerCase()       <---- usar esse, especialmente em projetos globais


OBSERVACAO 2:
Caso seja inserido um valor invalido, ele retorna a mensagem padrao EM INGLES. Caso queira mudar para portugues, deve fazer isso
na biblioteca da função. Eu editei a linha de numero invalido, adicionando um EDITADO no fim apenas para testes

n1 = leitor.questionFloat("Digite o primeiro numero: ");

no arquivo -->> limitMessage:       'Input valid number, please. EDITADO'


*/
const leitor = require('readline-sync')


let diaSemana = 1
//diaSemana = leitor.questionInt("Digite o dia da semana")

switch(diaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda-feira");
        break;
    case 3: 
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Dia da semana invalido");
}


let mes = 5
//mes = leitor.questionInt("Digite o numero do mes para mostrar o seu nome: ")

switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;    
    default:
        console.log("Mes invalido");
}


let estadoCivil = "solteiro"
//estadoCivil = leitor.question("Digite o seu estado civil: ")

switch(estadoCivil.toLocaleLowerCase()){
    case "solteiro":
        console.log("Voce está solteiro.")
        break;
    case "casado":
        console.log("Voce é casado.")
        break;
    case "divorciado":
        console.log("Voce é divorciado.");
        break;
    case "outro":
        console.log("Seu estado civil é algum outro.");
        break;
    default:
        console.log("Estado civil invalido")
}


let animal = "cachorro";
//animal = leitor.question("Qual o tipo de animal? ");

switch(animal.toLocaleLowerCase()){
    case "cachorro":
        console.log("Seu animal é um cachorro.");
        break;
    case "gato":
        console.log("Seu animal é um gato.");
        break;
    case "passaro":
        console.log("Seu animal é um passaro.");
        break;
    default:
        console.log("Seu animal é outro. ")
}



let n1, n2, operacao;
n1 = leitor.questionFloat("Digite o primeiro numero: ");
n2 = leitor.questionFloat("Digite o segundo numero: ");
operacao = leitor.question("Digite a operação que deseja realizar(+ = soma, - = subtração, * = multiplicação, / = divisão): ")

switch(operacao){
    case "+":
        console.log(n1,operacao,n2," = ", (n1+n2))
        break;
    case "-":
        console.log(n1,operacao,n2," = ", (n1-n2))
        break;
    case "*":
        console.log(n1,operacao,n2," = ", (n1*n2))
        break;
    case "/":
        console.log(n1,operacao,n2," = ", (n1/n2).toFixed(3))
        break;
    default:
        console.log("Operador invalido. ")
}
