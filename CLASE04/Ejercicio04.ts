// Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length

let frase : any = "Hola chicas de Back!"
let longitudFrase: number = (frase as string).length
console.log(`"${frase}"`);
console.log("La longitud de la frase es:", longitudFrase);
 