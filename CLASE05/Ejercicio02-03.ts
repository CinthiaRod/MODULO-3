// Ejercicio 2: Creación de Objetos y Atributos
// 1.Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
interface Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;
    // Ejercicio 3: Métodos en Objetos
    // 1.Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.
    descripcion: () => string;
  };

const libro: Libro = {
    titulo: "Los cuatro acuerdos",
    autor: "Miguel Ángel Ruiz",
    añoPublicacion: 1997, 
    descripcion: function() { 
    return `El libro "${this.titulo}" fue escrito por ${this.autor} y publicado en el año ${this.añoPublicacion}.`;
  }
};

// 2.Crea una instancia de ese objeto y muestra sus propiedades en la consola.
console.log(`Libro: "${libro.titulo}" - Autor: ${libro.autor} - Publicación: ${libro.añoPublicacion}`);


// Ejercicio 3: Métodos en Objetos
// 2.Llama al método y muestra el resultado en la consola.
console.log("\n-----Descripción del libro-----");
console.log(libro.descripcion());

