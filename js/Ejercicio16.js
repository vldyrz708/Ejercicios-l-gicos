let palabra = prompt ("Ingresa una palabra: ")

// Convertir a minúsculas y eliminar espacios para hacer la comparación
//palabra = palabra.toLowerCase().replace(/\s+/g, "");  //es más para oraciones


//invierte la palabra
let palabraInvertida = palabra.split("").reverse().join("")

if (palabra === palabraInvertida){
    console.log (palabra + " es palindromo")
} else {
    console.log (palabra + " no es palindromo")
}