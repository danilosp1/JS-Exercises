let comparaComThis = function (param) {
  console.log(this === param) // this é estritamente igual ao parametro passado?
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // esta definindo que o this da função remete ao 'obj'
comparaComThis(global)
comparaComThis(obj)

// aqui embaixo o this sempre vai remeter ao escopo que foi criado, pois usa arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //vai ser false, pois não é possivel .bind em arrowfunction 
