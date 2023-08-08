const leitor = require('readline-sync');

//lista de candidatos
const Candidatos = {
    889: "candidato_X",
    847: "candidato_Y",
    515: "candidato_Z",
    0: "branco"
  };
  
  
  let opt = 0;
  let votos = {};
  
  //preenche um dicionario com o numero de cada candidato do "enum" e inicializa com 0
  for (value in Candidatos)
      votos[value] = 0;
  
  
  //repetição para as votações
  do{
      opt = opt + 1;
      console.log("Iniciando sua votação...");
      
      //verifica se o usuario digita um numero valido (nao letra e acima de 0)
      while(true){
          try{
              let numeroVotado = leitor.questionInt("Digite o numero do seu candidato. 0 (zero) para voto em branco."));
          
              if(isNaN(numeroVotado) || votacao < 0)
                  throw new Error ("Insira um numero valido");
              else
                  break;
          }
          catch(error){
              console.log("Erro!! ", error.message);
          }
      }

      if (numeroVotado in Candidatos)
      console.log(numeroVotado)
      //switch(numeroVotado){

      //}
      
      
      
      
      
      console.log("chegou aqui")
      
      
  }while(opt != 4)