// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos libro,
//  donde cada libro tiene las propiedades titulo (string) y autor (string).
//La función debe recorrer el array 
function listarLibros(libros: { titulo: string; autor: string; }[]): void {
    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        console.log(`${i+1}. Título: ${libro.titulo}, Autor: ${libro.autor}`);
    }
}
// y mostrar los detalles de cada libro en la consola.

const arrayLibros: { titulo: string; autor: string; }[] = [
    { titulo: "La maestría del amor", autor: "Miguel Ángel Ruiz" },
    { titulo: "Los cuatro acuerdos", autor: "Miguel Ángel Ruiz" },
    { titulo: "La teoría sintérgica", autor: "Jacobo Grinberg" }
];

console.log("Lista de libros:");

listarLibros(arrayLibros);