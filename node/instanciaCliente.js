const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// require('/instanciaNova') -> retorna uma função
// require('/instanciaNova')() -> retorna o objeto da função
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
