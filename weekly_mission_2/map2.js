// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toLowerCase()) //Arrow function permiten omitir la palabra return cuando el código es de una sola línea.

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)

//const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//const nameslower = names.map((lower) => lower.toLowerCase())
//const nameslower = names.map(function(lower){return lower.toLowerCase()}) //Utilizando una función
//console.log(nameslower)