/*
Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo 
usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para 
realizar a captura e o tratamento dessa exceção.

LER: https://www.geeksforgeeks.org/javascript-rangeerror-bigint-divison-by-zero/
Teve que usar BigInt para poder gerar exceção. Utilizando Number ele retorna como resultado Infinity e nao o erro
*/

const leitor = require("readline-sync");

function dividir(n1, n2) {
  let resultado;
  try {
    resultado = n1 / n2;
  } catch (error) {
    resultado = "ERRO! Divisão por 0 é inexistente!";
  } finally {
    return resultado;
  }
}

let n1 = BigInt(leitor.questionFloat("Digite o primeiro numero: "));
let n2 = leitor.questionFloat("Digite o segundo numero: ");

let resultado = dividir(n1, n2);

console.log(`O resultado da divisão de ${n1}/${n2} é ${resultado}`);
