const estaEntre = (num, min, max, inclusivo = false) => {
    if(max < min){
        [max, min] = [min, max]
    }
    if(inclusivo){
        if(num >= min && num <= max) { return true }
    }
    if(num > min && num < max) { return true }
    return false
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))














