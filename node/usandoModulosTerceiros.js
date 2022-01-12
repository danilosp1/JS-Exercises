const _ = require('lodash') // ele vai buscar no nodeModules um index.js do lodash
setInterval(() => console.log(_.random(1, 1000)), 2000)

// no cmd: nodemon usandoModulosTerceiros.js
// executa o código, porém altera simultaneamente o que for alterando no arquivo
// digitar "rs" no cmd enquanto roda faz ele dar refresh





