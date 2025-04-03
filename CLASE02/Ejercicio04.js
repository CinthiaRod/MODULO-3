"use strict";
// Ejercicio 4: Función que devuelve un objeto
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). 
function crearLibro(titulo, autor, paginas) {
    // La función debe devolver un objeto con esas propiedades. 
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}
;
// Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.
console.log("Primer libro:");
console.log(crearLibro("La maestría del amor", "Miguel Ángel Ruiz", 224));
console.log("\nSegundo libro:");
console.log(crearLibro("Los cuatro acuerdos", "Miguel Ángel Ruiz", 160));
