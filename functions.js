/*
tipo 1 'Function'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

IMPORTANTE:
A função 'new Function' acessa sempre o valor global. No JS no browser ele busca o valor global (no exemplo 
'hello'). No NODE.JS ele foca no escopo local, entao ele busca o valor local (no exemplo 'ola)

Obs: Por causa das politicas de segurança dos Browser, não é possivel rodar esse codigo no browser e testar
tem que "sobrecarregar" as configurações de CSP pra desativar elas e fazer o teste

+-+-+-+-+-+-+ MUITO IMPORTANTE +-+-+-+-+-+
O "new Function" cria uma função anonima e retorna o corpo dela para a variavel, por isso, caso queira usar
essa função tem que colocar os (parenteses) e caso nao tenha um "return", ao chamar a função, nada é retornado

*/

var mensagem = "hello"
const funcao1 = new Function (
    `let mensagem = 'ola'
    return mensagem`)

const f1 = new Function("console.log('abc')")

console.log(funcao1) //function: anonymous
console.log(funcao1()) // ola

console.log(f1) //function: anonymous
console.log(f1()) // 'abc'     -> Primeiro escreve o que ta dentro da função quando ela é chamada
                  // undefined -> Como a função nao tem retorno, o retorno é "undefined"(void/null)

/*
tipo 2 'function NOME(PARAMETROS)

- A função pode ter uma parametro DEFAULT(padrao), para caso o usuario nao digite, ele utiliza esse valor
- Ela nao precisa necessariamente de uma variavel para guarda-la

*/

let mensagem2 = "hello2"
const f2 = function funcao2(msg = mensagem2){
    return msg
}

function funcaoSolta2(msg = mensagem2){
    return msg
}

console.log(f2('teste hello 2')) //teste hello 2
console.log(funcaoSolta2()) //hello2

/*
tipo 3 '()=> {}' (chamada de função anonima/arrow function)


*/
let mensagem3 = 'hello3'
const funcao3 = (mensagem = mensagem3)=>{
    return mensagem
}

console.log(funcao3())

/*
tipo 4 'function* NOME(PARAMETROS){
            YIELD
        }'
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*


- Essa função é chamada "função geradora"(iterators function), ela executa o comando ate encontrar o proximo YIELD
da função, retornando esse valor
- Muito utilizado e util para trabalhar com funções ASSINCRONAS, aonde poderia executar o proximo passo apenas após
receber o retorno do passado
- Para chamar a proxima iteração da função, utilizar o comando 'nomeFuncao.next()'
- Se quiser apenar executar ela e saber se foi completamente finalizada, chamar 'nomeFuncao.done()' //return true/false
- Se quiser executar a função e saber o valor de retorno dela, chamar 'nomeFuncao.next().value'

*/
function* outroGerador(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* gerador(i) {
    yield i;
    yield* outroGerador(i);
    yield i + 10;
  }
  
  var gen = gerador(10);
  
  console.log(gen.next().done); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20