/* Ejercicio 5: Datos nulos y diferenciados
Declara una variable de tipo string | null. 
Asigna inicialmente un valor de cadena, y luego cambia su valor a null. 
Imprime ambos estados en la consola, explicando el significado de null en TypeScript. */

let cadenaNull: string|null = "Back es lo mejor";
console.log(cadenaNull);

cadenaNull = null;
console.log(cadenaNull, "es la ausencia de valor");

