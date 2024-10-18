let valor = prompt ("Ingresa un valor numérico: ")

let numero = Number(valor) // convierte la variable valor a numero

// !isNaN verifica si es número el valor que esta entre ()
if (!isNaN(numero)){ 
    console.log ( numero + " es un valor numérico." )
} else {
    console.log ("Error, el valor ingresado no es un valor numérico.")
}