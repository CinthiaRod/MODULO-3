// Ejercicio 1: Operaciones básicas con Arrays
// 1.Declara un array de números con los valores [5, 10, 15, 20, 25].

const arregloNumeros: number[] =  [5, 10, 15, 20, 25]

// 2.Imprime el tercer elemento del array.
console.log("El tercer elemento del array es:", arregloNumeros[2]);


// 3.Añade el número 30 al final del array.
arregloNumeros.push(30)

// 4.Elimina el primer número del array.
arregloNumeros.shift()

// 5.Muestra por consola la longitud actual del array.
console.log(`La longitud actual del array es: ${arregloNumeros.length}`);
