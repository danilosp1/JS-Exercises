const filtrarNumeros = (lista) => {
    const apenasNumeros = lista.filter(x => typeof(x) === "number")
    return apenasNumeros
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))



















