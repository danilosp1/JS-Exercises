// Não aceita repetição/não indexada (não tem indice 0, 1, etc)

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // não vai funcionar, pois não aceita repetiçao

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const novosNomes = new Set(nomes)
console.log(novosNomes)
