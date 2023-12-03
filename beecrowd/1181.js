//importar o modulo fs(filesystem) para trabalhar com arquivos de diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorio
const endereco = require('path');

//Descubro o endereço de onde o meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirnme(process.argv[1]);

//reliza  leitura das linhas do arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

// define qual é a quebra de linha utilizada no seu sisema operacional
//se estiver utilizando linux coloque apenas \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'


