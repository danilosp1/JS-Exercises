console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo'
aprovados.push('Katy')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[0] === undefined)

console.log(aprovados)

aprovados.sort() // ordem alfabética
console.log(aprovados)

delete aprovados[1] // indice 1 recebe undefined

aprovados = ['Bia', 'Carlos', 'Ana']
// pega do elementos 1, corta 2, e substitui se quiser
aprovados.splice(1, 2) // Se usar (1, 2, 'elemento1', 'elementos2'), ele substitui

console.log(aprovados)
aprovados.splice(1, 0, 'Danilo', 'Marcos')

console.log(aprovados)












