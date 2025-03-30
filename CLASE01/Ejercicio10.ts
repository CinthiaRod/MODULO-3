/* Ejercicio 10: Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y boolean. 
Accede a estas propiedades e imprímelas en la consola. */

let estudiante: {
    nombre: string;
    edad: number;
    estudiaBack: boolean;
} = {
    nombre: "Cinthia",
    edad: 28,
    estudiaBack: true
};

console.log("El nombres es:", estudiante.nombre);
console.log("Su edad es:", estudiante.edad);
console.log("Es estudiante de Back:", estudiante.estudiaBack);


