function area(largura, altura){
  const area = largura * altura
  if(area > 20){
    console.log(`Valor acima do permitido: ${area}m²`)
  } else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5)) // vai executar a função, e printar undefined


