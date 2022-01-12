const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// pilotos é constante, então não pode ser atribuido mais nada nele
// porém, o array ao qual ele aponta é mutável e manipulável

pilotos.pop() // remove ultimo elementos
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos) // adiciona no primeiro

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // indice 3 é removido
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2 até o final
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // indice 1 até 3 (4 não entra)
console.log(algunsPilotos2)

