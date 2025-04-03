"use strict";
/* Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, ambos de tipo number */
function multiplicarNumeros(a, b) {
    return a * b; // y retorne el producto de ambos números.
}
const primerNumero = 2;
const segundoNumero = 5;
//Luego, muestra el resultado en consola llamando a la función.
const resultado = multiplicarNumeros(primerNumero, segundoNumero);
console.log(`El resultado de multiplicar ${primerNumero} por ${segundoNumero} es: ${resultado}`);
