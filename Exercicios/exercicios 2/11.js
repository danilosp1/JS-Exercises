const receiveFirstAndLast = (arrayList) => {
    const new_array = new(Array)
    new_array.push(arrayList[0], arrayList[arrayList.length -  1])
    return new_array
}

console.log(receiveFirstAndLast([7,14, "olá"]))
console.log(receiveFirstAndLast([-100, "aplicativo", 16]))














