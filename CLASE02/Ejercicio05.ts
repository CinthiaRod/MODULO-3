// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números
function sumarTodos (...numeros: number[]){
//  y devuelva su suma.
let suma = 0;
for (const numero of numeros) {
    suma += numero;
    }
return suma
};
//   Luego, llama a la función con varios números y muestra el resultado en la consola.
console.log('La suma de los números es:', sumarTodos(2, 4, 6, 8, 10));