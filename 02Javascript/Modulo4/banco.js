/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e 
agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

*/

const Banco = {
    conta: '12345678',
    agencia: '1234',
    saldo: 100,
    tipoConta: 'corrente',
    buscarSaldo: function() {return this.saldo},
    deposito: function(valor) {this.saldo += valor},
    saque: function(valor) {this.saldo -= valor},
    numeroConta: function() {return [this.agencia, this.conta]}
}

console.log(Banco.buscarSaldo())
Banco.deposito(500)
Banco.saque(300)
console.log(Banco.buscarSaldo())
console.log(Banco.numeroConta())


console.log(Banco.conta)
console.log(Banco.agencia)
console.log(Banco.saldo)
console.log(Banco.tipoConta)

/* OBSERVAÇÃO
 Ler e aprender sobre Get e Set em javascript
https://javascript.info/property-accessors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

*/

//Outro modo de fazer, utlizando com função
function Banco1(conta = '12345678', agencia = '12345', saldo = 100, tipoConta = 'corrente') {
    this.conta = conta
    this.agencia = agencia
    this.saldo = saldo
    this.tipoConta = tipoConta

    
    //this.buscarSaldo = function() {return this.saldo}
    this.buscarSaldo = () => this.saldo
    
    this.deposito = (valor) => this.saldo += valor
    this.saque = (valor) => this.saldo -= valor
    this.numeroConta = () => [this.agencia, this.conta]
}

let b = new Banco1('123', '1452', 200, 'poupança')

console.log("banco 2")
console.log(b.conta)
console.log(b.agencia)
console.log(b.saldo)
console.log(b.tipoConta)


console.log(b.buscarSaldo())
b.deposito(500)
b.saque(200)
console.log(b.buscarSaldo())
console.log(b.numeroConta())

