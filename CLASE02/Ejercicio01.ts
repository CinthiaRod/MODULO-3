/* Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, ambos de tipo number */

 function multiplicarNumeros(a: number, b: number): number {
return a * b;  // y retorne el producto de ambos números.
}
const primerNumero: number = 2;
const segundoNumero: number = 5;

//Luego, muestra el resultado en consola llamando a la función.
const resultado: number = multiplicarNumeros(primerNumero, segundoNumero); 
console.log(`El resultado de multiplicar ${primerNumero} por ${segundoNumero} es: ${resultado}`); 