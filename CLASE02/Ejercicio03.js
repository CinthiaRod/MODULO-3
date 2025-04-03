"use strict";
// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number).
let deportista = {
    nombre: "Serena Williams",
    deporte: "Tenis",
    energia: 80
};
//  Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento,
//   disminuyendo la energía del deportista en 5 por cada hora de entrenamiento.
function entrenar(deportista, horas) {
    deportista.energia -= horas * 5;
    if (deportista.energia < 0) { //Definimos una condición para que la energía no pueda ser menor a 0
        deportista.energia = 0;
    }
    ;
}
;
//    Al final, muestra el estado del deportista en la consola.
entrenar(deportista, 3); //Entrena 3 hrs
console.log(`El nombre del deportista es: ${deportista.nombre}`);
console.log(`El deporte que practica es: ${deportista.deporte}`);
console.log(`Su energía después de 3 horas de entrenamiento es: ${deportista.energia}%`);
