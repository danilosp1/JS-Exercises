require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // não vai mudar, pois defini Object.freeze
console.log(MinhaApp.nome)


