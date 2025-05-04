// Ejercicio 10: Sistema de Gestión de Biblioteca
// Crea un sistema para gestionar libros y miembros de una biblioteca. 
// Usa una clase abstracta Publicacion, 
export abstract class Publicacion {
    constructor(public titulo: string, public autor: string, public año: number, public disponible: boolean = true) {
      this.titulo = titulo;
      this.autor = autor;
    };
  
    abstract mostrarDetalles(): string;
  
    prestar(): void {
      if (this.disponible) { //Condición para el prestamo según la disponibilidad
        this.disponible = false;
        console.log(`\n"${this.titulo}" ha sido prestado.`);
      } else {
        console.log(`"${this.titulo}" no está disponible para préstamo.`);
      };
    };
  
    devolver(): void {
      if (!this.disponible) { //Condición para la devolución del libro y cambiar la disponibilidad
        this.disponible = true;
        console.log(`\n"${this.titulo}" ha sido devuelto.`);
      } else {
        console.log(`"${this.titulo}" está disponible.`);
      };
    };
  };

// clases concretas Libro y Revista, 
class Libro extends Publicacion {
    constructor(titulo: string, autor: string, año: number, disponible: boolean = true) {
      super(titulo, autor, año, disponible);
    };
  
    mostrarDetalles(): string {
      return `Libro: ${this.titulo} - Autor: ${this.autor} - Año: ${this.año} - Disponible: ${this.disponible ? 'Sí' : 'No'}`;
    };
  };

  class Revista extends Publicacion {
    constructor(titulo: string, autor: string, año: number, disponible: boolean = true) {
      super(titulo, autor, año, disponible);
    };
  
    mostrarDetalles(): string {
      return `Revista: ${this.titulo} - Autor: ${this.autor} - Año: ${this.año} - Disponible: ${this.disponible ? 'Sí' : 'No'}`;
    };
  }; 

// y una clase Biblioteca que gestione el préstamo de publicaciones.
class Miembro {
    public nombre: string;
    public idMiembro: number;
    private publicacionesPrestadas: Publicacion[] = [];
    
    constructor(nombre: string, id: number) {
      this.nombre = nombre;
      this.idMiembro = id;
    };
    
    prestarPublicacion(biblioteca: Biblioteca, publicacion: Publicacion): void {
        if (biblioteca.prestarPublicacion(this, publicacion)) {
          this.publicacionesPrestadas.push(publicacion);
        };
    };
    
    devolverPublicacion(biblioteca: Biblioteca, publicacion: Publicacion): void {
        if (this.publicacionesPrestadas.includes(publicacion)) {
          biblioteca.devolverPublicacion(publicacion);
          this.publicacionesPrestadas = this.publicacionesPrestadas.filter(p => p !== publicacion);
        } else {
          console.log(`${this.nombre} no tiene prestado "${publicacion.titulo}".`);
        };
    };
    
    listarPublicacionesPrestadas(): void {
        if (this.publicacionesPrestadas.length > 0) {
          console.log(`\nPublicaciones prestadas a ${this.nombre}:`);
          this.publicacionesPrestadas.forEach(p => console.log(`- ${p.titulo}`));
        } else {
          console.log(`\n${this.nombre} no tiene ninguna publicación prestada.`);
        };
    };
};

class Biblioteca {
    private publicaciones: Publicacion[] = [];
  
    agregarPublicacion(publicacion: Publicacion): void {
      this.publicaciones.push(publicacion);
    };
  
    prestarPublicacion(miembro: Miembro, publicacion: Publicacion): boolean {
      const publicacionEnBiblioteca = this.publicaciones.find(p => p === publicacion);
      if (publicacionEnBiblioteca) {
        if (publicacionEnBiblioteca.disponible) {
          publicacionEnBiblioteca.prestar();
          console.log(`\n${miembro.nombre} ha tomado prestado "${publicacionEnBiblioteca.titulo}".`);
          return true;
        } else {
          console.log(`\n"${publicacionEnBiblioteca.titulo}" no está disponible.`);
          return false;
        };

      } else {
        console.log(`"${publicacion.titulo}" no se encuentra en esta biblioteca.`);
        return false;
      };
    };
  
    devolverPublicacion(publicacion: Publicacion): void {
      const publicacionEnBiblioteca = this.publicaciones.find(p => p === publicacion);
      if (publicacionEnBiblioteca) {
        publicacionEnBiblioteca.devolver();
      } else {
        console.log(`"${publicacion.titulo}" no pertenece a esta biblioteca.`);
      };
    };
  
    listarPublicacionesDisponibles(): void {
      const disponibles = this.publicaciones.filter(p => p.disponible);
      if (disponibles.length > 0) {
        console.log("\nPublicaciones disponibles:");
        disponibles.forEach(p => console.log(`- ${p.mostrarDetalles()}`));
      } else {
        console.log("No hay publicaciones disponibles en este momento.");
      };
    };
  
    listarTodasLasPublicaciones(): void {
      if (this.publicaciones.length > 0) {
        console.log("Todas las publicaciones en la biblioteca:");
        this.publicaciones.forEach(p => console.log(`- ${p.mostrarDetalles()}`));
      } else {
        console.log("La biblioteca no tiene ninguna publicación.");
      };
    };
  };


  //Ejemplo de uso
  const miBiblioteca = new Biblioteca();

const libro1 = new Libro("Los cuatro acuerdos", "Miguel Ángel Ruiz", 1997, true);
const revista1 = new Revista("Diseño & Arte", "Garcia, L.", 2023, false);
const libro2 = new Libro("La maestría del amor", "Miguel Ángel Ruiz", 2001, false);
const revista2 = new Revista ("Ecología y Medio Ambiente", "Smith, J", 2023, true);

miBiblioteca.agregarPublicacion(libro1);
miBiblioteca.agregarPublicacion(revista1);
miBiblioteca.agregarPublicacion(libro2);
miBiblioteca.agregarPublicacion(revista2);

const miembro1 = new Miembro("Cinthia", 1);
const miembro2 = new Miembro("Felipe", 2);

miBiblioteca.listarPublicacionesDisponibles();

miembro1.prestarPublicacion(miBiblioteca, libro1);
miembro2.prestarPublicacion(miBiblioteca, revista1);
miembro1.prestarPublicacion(miBiblioteca, libro1); 
miembro2.prestarPublicacion(miBiblioteca, revista2);

miBiblioteca.listarPublicacionesDisponibles();

miembro1.listarPublicacionesPrestadas();
miembro2.listarPublicacionesPrestadas();

miembro1.devolverPublicacion(miBiblioteca, libro1);

miBiblioteca.listarPublicacionesDisponibles();
miembro1.listarPublicacionesPrestadas();