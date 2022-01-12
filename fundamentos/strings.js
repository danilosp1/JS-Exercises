const escola = "Cod3r"

console.log(escola.charAt(4)) //pega o valor no indice 4
console.log(escola.charCodeAt(3)) //valor na tabela ASCI do valor no indice 3
console.log(escola.indexOf('d')) //retorna o indice em que está a letra "d"

console.log(escola.substring(1)) //vai até o fim a partir do indice 1
console.log(escola.substring(0, 3)) //vai do indice 0 até o indice 3-1

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //substitui o index 3 por 'e'
console.log(escola.replace(/\d/, 'e')) //substitui todos os DIGITOS pela letra 'e' (expressão regular)
console.log(escola.replace(/\w/g, 'e')) //substitui todos as letras e digitos pela letra 'e' (expressão regular)

console.log('Ana,Maria,Pedro'.split(',')) //forma um array, dividindo pela ','

// tudo que tem /alguma coisa/ é REGEX