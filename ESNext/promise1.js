
let p = new Promise(function(cumprirPromessa){ //cumprir promessa = resolve
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
}) //"promessa" que dará algo no futuro, gera um único valor
// é possível retornar mais de um valor a partir de um objeto {} ou uma lista []

function primeiroElemento(array) {
    return array[0]
}

p
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(console.log) // não precisa necessáriamente passar a função, pois só há um parâmetro de qualquer forma


//console.log(typeof p) // object
//console.log(typeof Promise) // function


