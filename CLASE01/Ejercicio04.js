"use strict";
/* Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una edad.
Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada".
Si se asigna la edad, imprímela junto al nombre. */
let nombre3 = undefined;
let edad3 = undefined;
nombre3 = "Coco";
/* edad3 = 11; */
if (edad3 == undefined) {
    console.log("Edad no proporcionada");
}
else {
    console.log(`${nombre3} tiene ${edad3} años.`);
}
