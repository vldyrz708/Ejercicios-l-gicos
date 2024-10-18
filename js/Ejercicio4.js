let numero = prompt("Ingresa un valor: ")

console.log ("El valor ingresado es: " + numero)

if (numero >0){
    console.log ("El número " + numero + " es positivo")

} else if (numero<0){
    console.log("El número " + numero + " es negativo" )

}else if (numero == 0) {
    console.log("El numero es cero ") 
}else {
    console.log("No ingresaste un valor válido")
}