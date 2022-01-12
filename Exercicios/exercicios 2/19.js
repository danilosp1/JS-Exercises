const calcularMedia = array => {
    let soma = 0
    for(let i in array) soma += array[i]

    return soma / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))








