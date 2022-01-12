console.log(module.exports) // começa vazio
console.log(module.exports === this)
console.log(module.exports === exports)


// todos funcionam, entretanto, APENAS o module.exports vai exportar os módulos
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true} // atribuindo objeto para ser exportado