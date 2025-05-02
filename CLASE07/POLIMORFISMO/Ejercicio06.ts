// Ejercicio 6: Herencia Múltiple Simulada con Interfaces
// Crea dos interfaces, Volador y Nadador, con métodos volar y nadar, respectivamente.
interface Volador {
    volar(): void;
  };
  
  interface Nadador {
    nadar(): void;
  };

// Implementa ambas interfaces en una clase Pato. 
// Demuestra cómo una clase puede "heredar" múltiples comportamientos usando interfaces.
class Pato implements Volador, Nadador {
    public nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    };
  
    volar(): void {
      console.log(`${this.nombre} el pato está volando.`);
    };
  
    nadar(): void {
      console.log(`${this.nombre} el pato está nadando en el agua.`);
    };
  };
  

//Ejemplo de uso
const miPato = new Pato("Killer");
miPato.nadar();
miPato.volar();