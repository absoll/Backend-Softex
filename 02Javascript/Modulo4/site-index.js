/*
Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que 
podem ser de qualquer tipo (get, put etc). Depois, faça um teste em aplicações de rota, como o Postman ou o 
Insomnia, para confirmar se o retorno está coerente com o que você programou."

Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está 
em um arquivo diferente do código de conexão.
*/


//inicializa o modulo
const express = require('express')
var app = express()


//importa o "router", o arquivo que contem os links de acesso do site
app.use(require('./site-routes.js'))


//inicia de fato o servidor na porta 10000
app.listen(10000)