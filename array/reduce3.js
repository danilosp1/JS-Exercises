Array.prototype.reduce2 = function(callback, first=undefined){
    let acumulador = first || this[0]
    const num = first ? 0 : 1
    
    for(let i = num; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 4))










