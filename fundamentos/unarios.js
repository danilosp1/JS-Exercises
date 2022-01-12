let num1 = 1
let num2 = 2

num1++ // num += 1
console.log(num1)

--num1 // essa forma tem mais precedência para ser executada (acontece antes que num--, por exemplo)
console.log(num1)

console.log(++num1 === num2--) //verdadeiro, pois ++ foi executado antes da comparação, e o -- depois
console.log(num1 === num2)

