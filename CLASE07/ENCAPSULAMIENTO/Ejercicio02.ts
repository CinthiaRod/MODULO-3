// 2. Ejercicio de Libro
// Crea una clase Libro que represente un libro en una biblioteca.
// Esta clase debe tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
class Libro {
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true; 
        console.log(`El libro "${this._titulo}", del autor ${this._autor}, su disponibilidad es: ${this._disponible}`);
    };

// Implementa métodos para prestar y devolver el libro, 
public prestar(): void {
// asegurando que solo se pueda prestar si está disponible y que se pueda devolver solo si ha sido prestado. 
// Imprime un mensaje en caso de que se intente realizar una acción no válida.
if (!this._disponible) {
    console.log("Libro no disponible.");
} else {
    this._disponible = false;
    console.log(`Libro prestado: ${this._titulo}`);
    };
};
public devolver(): void {
    if (this._disponible) {
        console.log("El libro disponible.");
    } else {
        this._disponible = true;
        console.log(`Devolución del libro: ${this._titulo}`);
    };
};
public get disponible(): boolean {
    return this._disponible;
    };
};

//Ejemplo de uso
export const libro = new Libro('Convénceme de vivir', 'Gaby Pérez Islas', 2019);
libro.prestar();
console.log(`¿Está disponible el libro? ${libro.disponible}`);
libro.devolver();
console.log(`¿Está disponible el libro? ${libro.disponible}`);
