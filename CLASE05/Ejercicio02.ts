// Ejercicio 2: Creación de Objetos y Atributos
// 1.Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
interface Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;
  };

const libro: Libro = {
    titulo: "Los cuatro acuerdos",
    autor: "Miguel Ángel Ruiz",
    añoPublicacion: 1997
  };

// 2.Crea una instancia de ese objeto y muestra sus propiedades en la consola.
console.log(`El nombre del libro es "${libro.titulo}", su autor ${libro.autor} y fue publicado en ${libro.añoPublicacion}`);
