/*
Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo 
menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em 
JavaScript e exemplifique as suas características e ações.
*/

/*
Objetos materiais:
Pessoa
    Atributos
        Altura
        Peso
        Cor do cabelo
    Metodos
        Andar()
        Falar()
        Dançar()

Animal
    Atributos
        Espécie
        Alimentação
        Cor da pele
    Metodos
        Comer()
        Locomover()
        Respirar

Objetos abstratos:
Software
    Atributos
        TamanhoEmMB
        RequisitosMinitos
        LinguagemDesenvolvida
    Metodos
        IniciarSoftware()
        ExecutarUmaAção()
        FinalizarSoftware()
Portugues
    Atributos
        Vogais
        Consoantes
        Acentos
    Metodos
        Sílabas()
        Palavras()
        Frases()

*/

const Pessoa = {
  Altura: 1.89,
  Peso: 89.5,
  CorDoCabelo: "Preto",
  Andar: function () {
    console.log("Andar");
  },
  Falar: function () {
    console.log("Falar");
  },
  Dancar: function () {
    console.log("Dançar");
  },
};

const Animal = {
  Especie: "Tamandua",
  Alimentacao: "Formigas",
  CorDaPele: "Preto com marrom",
  Comer: function () {
    console.log("Comer");
  },
  Locomover: function () {
    console.log("Locomover");
  },
  Respirar: function () {
    console.log("Respirar");
  },
};

const Software = {
  TamanhoEmMB: 300,
  RequisitosMinimos: "Windows 10",
  LinguagemDesenvolvida: "Javascript",
  IniciarSoftware: function () {
    console.log("Iniciar software");
  },
  ExecutarUmaAcao: function () {
    console.log("Executar uma ação");
  },
  FinalizarSoftware: function () {
    console.log("Finalizar software");
  },
};

const Portugues = {
  Vogais: "AEIOU",
  Consoantes: "BCDFGHJKLMNPQRSTVWXYZ",
  Acentos: "^~´'",
  Silabas: function () {
    console.log("BA-BE-BI-BO-BU");
  },
  Palavras: function () {
    console.log("Idioma");
  },
  Frases: function () {
    console.log("Portugués é um idioma");
  },
};
