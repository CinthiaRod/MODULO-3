// Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
// Consigna: Crea una función llamada crearPersona que acepte tres parámetros: nombre (string), edad (number), y pais (string). 
function crearPersona(nombre:string, edad:number, pais:string){
//La función debe devolver un objeto que tenga esas propiedades. 
return {
    nombre: nombre,
    edad:edad,
    pais: pais
    };
};
//Luego, imprime el objeto retornado en la consola.
console.log("Los datos son: \n", crearPersona("Cinthia", 28, "México"));
