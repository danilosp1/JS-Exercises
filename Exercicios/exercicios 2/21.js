const menorNumero = array => {
    let menor = array[0]
    for(let i in array){
        if(array[i] < menor) menor = array[i]
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))




