// adicionando *chaves* e *valores* dinamicamente dentro do module exports
// Acessar moduloCliente.js
console.log(this)

this.ola = 'Fala Pessoal' // essa variavel pode ser utilizada em outro arquivo - ola foi criado dentro de this
exports.bemVindo = 'Bem vindo ao node!' // bemVindo foi criado dentro de exports
module.exports.ateLogo = 'Até o próximo exemplo'



            





