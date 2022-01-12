const multiplicar = (num1, num2) => {
    if(num1 === 0 || num2 === 0) return 0

    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)

    function multiplicadorOtimizado(num, multiplicador) {
        return (
            multiplicador === 1 ?
            num :
            num + multiplicadorOtimizado(num, multiplicador-1)
        )
    }
    return multiplicadorOtimizado(maiorNumero, menorNumero)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))












