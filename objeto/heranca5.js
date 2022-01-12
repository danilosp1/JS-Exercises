console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// criar uma função "reverse" no prototype de String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Legal'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

// é possível sobrescrever uma função já existente, porém pode dar bugs, então NÃO FAÇA
String.prototype.toString = function() {
    return 'Não faça isso k'
}

console.log('Escola Cod3r'.reverse()) //vai dar efeito colateral pela declaração anterior
