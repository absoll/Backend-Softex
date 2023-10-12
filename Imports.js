//Para importar do diretorio raiz, seguir o passo a seguir
// https://archive.is/20230321224040/https://marian-caikovski.medium.com/how-to-import-a-module-from-the-root-of-a-node-js-project-edb3421534e3
// https://github.com/marianc000/importFromRoot


/*
dento do "package.json" escrever as seguintes informações:

 "imports": {
    "#root/*": {
      "default": "./*"
    }
  }

a partir dai, qualquer import que queira iniciar a partir do diretorio raiz vai ser reconhecido como "#root/"
*/