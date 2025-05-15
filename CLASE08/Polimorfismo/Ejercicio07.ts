// Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos Sobrecargados
// Crea una clase abstracta InstrumentoMusical con un método tocar. 
abstract class InstrumentoMusical {
        constructor(public nombre: string) {}
        abstract tocar(acorde?: string): void;
    };

// Crea dos clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el instrumento de manera diferente. 
// Además, agrega una sobrecarga del método tocar en la clase base para permitir tocar con o sin acompañamiento.
class Guitarra extends InstrumentoMusical {
    constructor() {
         super("Guitarra");
        };
    
        tocar(acorde?: string): void {
            if (acorde) {
                console.log(`${this.nombre} está tocando el acorde de ${acorde}.`);
            } else {
                console.log(`${this.nombre} está tocando acordes.`);
            };
        };
    };
    class Piano extends InstrumentoMusical {
        constructor() {
            super("Piano");
        };
        
        tocar(acorde?: string): void {
            if (acorde) {
                console.log(`${this.nombre} está tocando un acorde de ${acorde} con el piano.`);
             } else {
                 console.log(`${this.nombre} está tocando una canción.`);
                };
            };
    };

// Ejemplo de uso
const miGuitarra = new Guitarra();
const miPiano = new Piano();

miGuitarra.tocar(); 
miGuitarra.tocar("Sol"); 

miPiano.tocar(); 
miPiano.tocar("Fa sostenido mayor"); 