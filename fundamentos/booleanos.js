let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// !! transforma em boolean

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(('' || null || 0 || 'epa' || 123)) //retorna apenas o PRIMEIRO verdadeiro, no caso é o 'epa'

console.log('\n')

let nome = '' 
console.log(nome || 'Desconhecido')
// vai imprimir o nome, caso esteja vazio, imprime 'desconhecido'


