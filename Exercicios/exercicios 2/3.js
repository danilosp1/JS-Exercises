const calcularSalario = (horas, pagamento) => {
    let salario = horas * pagamento
    return `Salário igual a R$ ${salario.toFixed(2).replace('.', ',')}`
}

console.log(calcularSalario(150, 40.5))









