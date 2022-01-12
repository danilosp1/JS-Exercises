const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //não gera erro, mas retorna undefined

valores[5] = 10 //retorna 1 vazio (continua como undefined)
console.log(valores)
console.log(valores.length)
valores[4] = 2

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)