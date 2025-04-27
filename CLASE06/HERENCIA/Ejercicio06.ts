// Ejercicio 6: Herencia con Métodos Sobrescritos y super
// Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que indique que el zoológico está abierto.
class Zoologico {
    public nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    };
  
    public abrirPuertas(): void {
      console.log(`${this.nombre} ha abierto sus puertas.`);
    };
  };

// Crea una clase derivada ZoologicoSafari que sobrescriba el método abrirPuertas() pero llamando al método de la clase base con super.
class ZoologicoSafari extends Zoologico {
    constructor(nombre: string) {
      super(nombre);
    };
  
    public abrirPuertas(): void {
      console.log(`¡Atención! el safari en ${this.nombre} esta por comenzar...`);
      super.abrirPuertas(); 
      console.log("¡Bienvenidos damos inicio al safari!");
    };
  };