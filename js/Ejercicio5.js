console.log ("A comparar valores.")

let numero1 = prompt ("Ingresa el primer número: ")
let numero2 = prompt ("Ingresa el segundo número: ")

console.log ("El primer número es: " + numero1 )
console.log ("El segundo número es: " + numero2)

if (numero1 > numero2){
    console.log ("El número " + numero1 + " es mayor")
}else if (numero2 > numero1) {
    console.log ("El número " + numero2 + " es mayor")
}else {
    console.log ("Los números son iguales") 
}