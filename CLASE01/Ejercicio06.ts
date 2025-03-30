/* Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown. 
Asigna diferentes tipos de valores a esta variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores. */

let valorUnknown: unknown = "Hola soy un valor unknown";
if (typeof valorUnknown === 'string'){
    console.log("El valor es una cadena de texto:", valorUnknown);
    };
valorUnknown = 8;
if (typeof valorUnknown === 'number'){
    console.log("El valor es un número:", valorUnknown);
    };
valorUnknown = true;
if (typeof valorUnknown === 'boolean'){
console.log("El valor es un booleano:", valorUnknown);
}