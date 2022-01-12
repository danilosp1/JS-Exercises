const funcaoDaSorte = num => {
    const aleatorio = parseInt(Math.random() * (10 - 1) + 1)
    return (aleatorio == num) ? `Parabéns! O número sorteado foi o ${num}` : `Que pena! O número sorteado foi o ${aleatorio}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))






