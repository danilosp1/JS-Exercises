const repetir = (elemento, repeticao) => {
    const new_array = []
    for(let i = 0; i < repeticao; i++){
        new_array.push(elemento)
    }
    return new_array
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))
