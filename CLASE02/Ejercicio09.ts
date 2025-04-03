// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y encendido (booleano). 
const coche: {
    marca: string;
    modelo: string;
    encendido: boolean;
} = {
    marca: "Jeep",
    modelo: "Liberty",
    encendido: false
};
// Define una función encenderCoche que acepte el objeto coche y cambie el valor de encendido a true. 
function encenderCoche(coche: { marca: string; modelo: string; encendido: boolean; }): void {
    coche.encendido = true;
}

// Muestra el estado del coche en la consola antes y después de llamar a la función.
console.log(coche)

encenderCoche(coche) //Encendemos  el coche
console.log("\nEncendiendo el coche....\n", coche);
