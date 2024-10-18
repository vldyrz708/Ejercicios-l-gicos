let numeros = ["22", "65", "99", "1", "25"]
console.log("Arreglo inicial:")
for ( let i = 0 ; i < numeros.length; i++){
    console.log( numeros[i])
}

console.log ("Arreglo modificado: ")
numeros [2] = 101

for (i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
