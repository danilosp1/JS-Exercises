let num = function() {
  n1 = this.x 
  n2 = this.y 

  return soma(n1, n2)
}
const soma = (a, b) => a + b

const coords = {
  x: 4,
  y: 5
}

num = num.bind(coords)

console.log(num())

