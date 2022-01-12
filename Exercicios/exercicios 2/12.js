const removerPropriedade = (obj, prop) => {
    const new_obj = Object.assign({}, obj)
    delete new_obj[prop]

    return new_obj
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descrição: "Não preenchido"
}, "descrição"))

const obj_new = {
    id: 20,
    nome: "caneta",
    descrição: "Não preenchido"
}

console.log(Object.is(removerPropriedade(obj_new, "descricao"), obj_new))








