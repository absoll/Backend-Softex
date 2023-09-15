/*
Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que 
podem ser de qualquer tipo (get, put etc). Depois, faça um teste em aplicações de rota, como o Postman ou o 
Insomnia, para confirmar se o retorno está coerente com o que você programou."

Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está 
em um arquivo diferente do código de conexão.


*/
//Inicia o modulo express e cria uma variavel do tipo "Router", responsavel por linkar os acessos do site
const app = require('express')
const router = app.Router()


//Uma função "vazia", nao possui endereço, então ira ser executada não importa o link que seja acessado nesse arquivo
//peguei da internet ja pronta. Deixei aqui para conhecimento proprio, caso queira uma função que seja executada em 
//todas as paginas acessadas desse arquivo

//função funciona como uma FUNÇÃO GERADORA, se nao tiver o momento do pause (next()) a função na finaliza e vai para
//o endereço real. Verificar arquivo na pasta raiz chamado de "functions.js" para entender melhor função geradora
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next(); //necessario e obrigatorio, para sair dessa função e entrar na função requisita pelo usuario
  });


//rota destino digitada pelo usuario
router.get('/', (request, response) => {
    console.log("Server online...")
    return response.send('Hello world!')
})


//obrigatorio exportar o modulo para que no arquivo destino ela possa ser lido
module.exports = router;